import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo/client";
import { injectGlobal } from "styled-components";
import { Restaurant, Tag } from "./pages";
import { Nav } from "./commons";

injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path="/restaurant" component={Restaurant} />
              <Route exact path="/tag" component={Tag} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
