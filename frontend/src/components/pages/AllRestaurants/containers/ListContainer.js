import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import client from "../../../../apollo/client";
import { RESTAURANT_LIST } from "../../../../apollo/queries";
import { List } from "../../../commons";

class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    client
      .query({ query: RESTAURANT_LIST })
      .then(({ error, loading, data }) => {
        this.setState({
          restaurants: data.restaurants
        });
      });
  }

  render() {
    const { restaurants } = this.state;

    return (
      <Fragment>
        <List>
          {restaurants.map((restaurant, i) => {
            return (
              <Link to={`/restaurant/${restaurant.id}`} key={i}>
                <List.Item> {restaurant.name} </List.Item>
              </Link>
            );
          })}
        </List>
      </Fragment>
    );
  }
}

export default ListContainer;
