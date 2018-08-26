import React, { Component } from "react";
import client from "../../../apollo/client";
import { RESTAURANT_LIST } from "../../../apollo/queries";
import { List } from "../../../commons";

class RestaurantListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };
  }

  fetchList = () => {
    const query = RESTAURANT_LIST;

    client
      .query({ query, fetchPolicy: "network-only" })
      .then(({ error, loading, data }) => {
        this.setState({ restaurants: data.restaurants });
      });
  };

  addItem = data => {
    const newRestaurant = {
      id: data.id,
      name: data.name,
      __typename: "Restaurant",
      "Symbol(id)": "Restaurant:" + data.id
    };

    this.setState({
      restaurants: [...this.state.restaurants, newRestaurant]
    });
  };

  removeItem = id => {
    const restaurants = this.state.restaurants.filter(obj => {
      return obj.id !== id;
    });

    this.setState({
      restaurants
    });
  };

  componentDidMount() {
    this.fetchList();
  }

  render() {
    const { onChangeRestaurant, onNewRestaurant } = this.props;

    return (
      <List>
        {this.state.restaurants.map((restaurant, i) => {
          return (
            <List.Item
              active={this.props.restaurant === restaurant.id}
              key={i}
              onClick={() => onChangeRestaurant(restaurant.id)}
            >
              {restaurant.name}
            </List.Item>
          );
        })}
        <List.ButtonItem onClick={onNewRestaurant}>
          + 새로운 식당
        </List.ButtonItem>
      </List>
    );
  }
}

export default RestaurantListContainer;
