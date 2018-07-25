import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  CardList,
  Navigation,
  TagSelector,
  DetailRestaurantCard
} from "./components";

import { Home, Restaurant } from "./pages";

import { injectGlobal } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

injectGlobal`
  * {
    outline: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background-color: #f8f9fa;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/r" component={Restaurant} />
            <Route path="*" component={() => <div> 404 </div>} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
