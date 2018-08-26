import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApolloProvider } from "react-apollo";
import client from "./apollo/client";
import {
  Home,
  Restaurant,
  Login,
  Register,
  Like,
  Menu,
  Suggest,
  AllRestaurants
} from "./components/pages";
import { NotFound } from "./components/commons";

injectGlobal`
  * {
    -webkit-appearance: none;
    outline: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    margin-bottom: 62.3333px;
    background-color: #F8F9FA;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

//TODO: Prop-type 적용

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/restaurant/:id" component={Restaurant} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/like" component={Like} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/suggest" component={Suggest} />
              <Route exact path="/list" component={AllRestaurants} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
