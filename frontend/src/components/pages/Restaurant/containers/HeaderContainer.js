import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
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
              <Fragment>
                <Helmet>
                  <meta
                    property="og:title"
                    content={`${name} - 인후라이프 2.0`}
                  />
                  <title>{`${name} - 인후라이프 2.0`}</title>
                </Helmet>
                <Header
                  restaurantId={id}
                  tags={tags}
                  title={name}
                  image={`http://${HOST}:4001/images/${id}.jpg`}
                />
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default HeaderContainer;
