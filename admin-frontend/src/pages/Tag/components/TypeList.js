import React, { Component } from "react";
import { List } from "../../../commons";

class RestaurantListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, onChangeType } = this.props;

    return (
      <List>
        <List.Item
          active={type === "major"}
          onClick={() => onChangeType("major")}
        >
          대분류
        </List.Item>

        <List.Item
          active={type === "minor"}
          onClick={() => onChangeType("minor")}
        >
          소분류
        </List.Item>
      </List>
    );
  }
}

export default RestaurantListContainer;
