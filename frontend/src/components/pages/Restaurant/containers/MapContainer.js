import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { RESTAURANT_ADDRESS } from "../../../../apollo/queries";
import { Map } from "../components";

class MenuListContainer extends Component {
  render() {
    const { restaurantID } = this.props;

    return (
      <Fragment>
        <Query query={RESTAURANT_ADDRESS(restaurantID)}>
          {({ error, loading, data }) => {
            if (loading) return <div> 지도로딩중 </div>;
            if (error) return <div> 지도오류 </div>;

            const { address } = data.restaurant;

            return <Map address={address} />;
          }}
        </Query>
      </Fragment>
    );
  }
}

export default MenuListContainer;
