import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import {
  faFacebook,
  faGithubSquare,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";
import { LikeListContainer } from "./containers";
import { WidthLimiter, Navigation } from "../../commons";

//TOOD: 로그인 안되어있으면

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
