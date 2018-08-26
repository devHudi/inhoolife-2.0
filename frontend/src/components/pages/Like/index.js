import React, { Component, Fragment } from "react";
import { LikeListContainer } from "./containers";
import { WidthLimiter, Navigation } from "../../commons";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <WidthLimiter noPadding>
          <LikeListContainer />
        </WidthLimiter>
        <Navigation active="like" />
      </Fragment>
    );
  }
}

export default Menu;
