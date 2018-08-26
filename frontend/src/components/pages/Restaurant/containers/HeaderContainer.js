import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { RESTAURANT_HEADER } from "../../../../apollo/queries";
import { Header, HeaderSkeleton } from "../components";

const HOST = process.env.REACT_APP_BACKEND_HOST;

class HeaderContainer extends Component {
  render() {
    const { restaurantID } = this.props;

    return (
      <Fragment>
        <Query query={RESTAURANT_HEADER(restaurantID)}>
          {({ error, loading, data }) => {
            if (loading) return <HeaderSkeleton />;

            const { id, tags, name } = data.restaurant;

            return (
              <Header
                restaurantId={id}
                tags={tags}
                title={name}
                image={`http://${HOST}:4001/images/${id}.jpg`}
              />
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default HeaderContainer;
