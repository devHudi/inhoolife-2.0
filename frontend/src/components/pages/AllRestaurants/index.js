import React, { Component, Fragment } from "react";
import { ListContainer } from "./containers";
import { WidthLimiter, Navigation } from "../../commons";

class AllRestaurants extends Component {
  render() {
    return (
      <Fragment>
        <WidthLimiter noPadding>
          <ListContainer />
        </WidthLimiter>
        <Navigation active="menu" />
      </Fragment>
    );
  }
}

export default AllRestaurants;
