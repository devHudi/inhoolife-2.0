import React, { Component, Fragment } from "react";
import client from "../../../../apollo/client";
import {
  VERIFY_TOKEN,
  RESTAURANT_LIKE,
  ADD_LIKE_RESTAURANT,
  REMOVE_LIKE_RESTAURANT
} from "../../../../apollo/queries";
import { LikeButton } from "../components";

class LikeButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
      likes: 0
    };
  }

  handleToggle = () => {
    const { isLiked } = this.state;
    const token = localStorage.jwt;

    if (token) {
      if (isLiked) {
        this.removeLikeRestaurant();
      } else {
        this.addLikeRestaurant();
      }
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  verifyToken = () => {
    const token = localStorage.jwt;

    return new Promise((resolve, reject) => {
      client
        .query({
          query: VERIFY_TOKEN(token),
          fetchPolicy: "network-only"
        })
        .then(result => {
          const id = result.data.verifyToken;
          resolve(id);
        });
    });
  };

  addLikeRestaurant = () => {
    const { restaurantId } = this.props;

    this.verifyToken().then(id => {
      const mutation = ADD_LIKE_RESTAURANT(id, restaurantId);
      client.mutate({ mutation }).then(result => {
        this.setState({
          isLiked: true,
          likes: this.state.likes + 1
        });
      });
    });
  };

  removeLikeRestaurant = () => {
    const { restaurantId } = this.props;

    this.verifyToken().then(id => {
      const mutation = REMOVE_LIKE_RESTAURANT(id, restaurantId);
      client.mutate({ mutation }).then(result => {
        this.setState({
          isLiked: false,
          likes: this.state.likes - 1
        });
      });
    });
  };

  renderLike = id => {
    const { restaurantId } = this.props;

    client
      .query({
        query: RESTAURANT_LIKE(id, restaurantId),
        fetchPolicy: "network-only"
      })
      .then(({ error, loading, data }) => {
        const like_users = data.restaurant.likes;
        const isLiked = like_users.indexOf(id) !== -1;

        this.setState({
          isLiked,
          likes: like_users.length
        });
      });
  };

  componentDidMount() {
    this.verifyToken().then(id => {
      this.renderLike(id);
    });
  }

  render() {
    const { isLiked, likes } = this.state;

    return (
      <Fragment>
        <LikeButton
          isLiked={isLiked}
          likes={likes}
          onClick={this.handleToggle}
        />
      </Fragment>
    );
  }
}

export default LikeButtonContainer;
