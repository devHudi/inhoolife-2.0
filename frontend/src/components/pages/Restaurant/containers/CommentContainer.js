import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import client from "../../../../apollo/client";
import {
  RESTAURANT_COMMENTS,
  VERIFY_TOKEN,
  WRITE_COMMENT_TO_RESTAURANT
} from "../../../../apollo/queries";
import { CommentList, CommentInput } from "../components";

class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      userID: null,
      body: ""
    };
  }

  handleClickButton = callback => {
    const { restaurantID } = this.props;
    const { userID, body } = this.state;
    const mutation = WRITE_COMMENT_TO_RESTAURANT(restaurantID, userID, body);

    client
      .mutate({
        mutation
      })
      .then(() => {
        callback();

        this.setState({
          body: ""
        });
      });
  };

  handleChangeComment = e => {
    this.setState({
      body: e.target.value
    });
  };

  componentDidMount() {
    const token = localStorage.jwt;

    if (token) {
      const query = VERIFY_TOKEN(token);

      client
        .query({
          query
        })
        .then(result => {
          const userID = result.data.verifyToken;
          this.setState({
            userID
          });
        });
    }
  }

  render() {
    const isTokenExists = localStorage.jwt ? true : false;
    const { restaurantID } = this.props;

    return (
      <Fragment>
        <Query query={RESTAURANT_COMMENTS(restaurantID)}>
          {({ error, loading, data, refetch }) => {
            if (loading) return <div>댓글 로딩중</div>;
            if (error) return <div />;

            const { comments } = data.restaurant;

            return (
              <Fragment>
                <CommentList comments={comments} />
                <CommentInput
                  isTokenExists={isTokenExists}
                  onClick={() => {
                    this.handleClickButton(refetch);
                  }}
                  onChange={this.handleChangeComment}
                  value={this.state.body}
                />
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default CommentContainer;
