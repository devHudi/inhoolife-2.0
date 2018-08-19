import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { RESTAURANT_MENU } from "../../../../apollo/queries";
import { MenuList } from "../components";

class MenuListContainer extends Component {
  render() {
    const { restaurantID } = this.props;

    return (
      <Fragment>
        <Query query={RESTAURANT_MENU(restaurantID)}>
          {({ error, loading, data }) => {
            if (loading) return <div> 메뉴로딩중 </div>;
            if (error) return <div> 메뉴 로딩중 에러발생 </div>;

            const { menu } = data.restaurant;

            return <MenuList menu={menu} />;
          }}
        </Query>
      </Fragment>
    );
  }
}

export default MenuListContainer;
