import React, { Component } from "react";
import client from "../../../apollo/client";
import {
  RESTAURANT,
  ADD_RESTAURANT,
  UPDATE_RESTAURANT,
  REMOVE_RESTAURANT
} from "../../../apollo/queries";
import { Form } from "../components";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: "",
      name: "",
      tags: "",
      menu: "",
      address: "",
      url: "http://placehold.it/500x500?text=no_image"
    };
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleTagChange = e => {
    this.setState({
      tags: e.target.value
    });
  };

  handleMenuChange = e => {
    this.setState({
      menu: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleURLChange = e => {
    this.setState({
      url: e.target.value
    });
  };

  handleConfirmClick = () => {
    return new Promise((resolve, reject) => {
      function noQuotesStringify(menu) {
        let menuString = "[\n";

        menu.map(singleMenu => {
          menuString += `{name: "${singleMenu.name}", price: ${
            singleMenu.price
          }},\n`;
        });

        menuString += "]";

        return menuString;
      }

      const { restaurant, name, tags, menu, address, url } = this.state;
      const isNew = restaurant === "";

      const newTags = '["' + tags.split(",").join('","') + '"]';
      const newMenu = noQuotesStringify(
        menu.split("\n").map(singleMenu => {
          const splited = singleMenu.split(":");
          return {
            name: splited[0],
            price: parseInt(splited[1])
          };
        })
      );

      if (isNew)
        this.addRestaurant(name, newTags, newMenu, address, url).then(
          restaurant => {
            resolve(restaurant);
          }
        );
      else
        this.updateRestaurant(
          restaurant,
          name,
          newTags,
          newMenu,
          address,
          url
        ).then(restaurant => {
          resolve(restaurant);
        });
    });
  };

  handleRemoveClick = () => {
    return new Promise((resolve, reject) => {
      this.removeRestaurant(this.state.restaurant).then(restaurant => {
        resolve(restaurant);
      });
    });
  };

  addRestaurant = (name, tags, menu, address, url) => {
    return new Promise((resolve, reject) => {
      const mutation = ADD_RESTAURANT(name, address, tags, menu, url);

      client
        .mutate({
          mutation
        })
        .then(({ error, loading, data }) => {
          resolve(data.addRestaurant);
        });
    });
  };

  updateRestaurant = (restaurant, name, tags, menu, address, url) => {
    return new Promise((resolve, reject) => {
      const mutation = UPDATE_RESTAURANT(
        restaurant,
        name,
        address,
        tags,
        menu,
        url
      );

      client
        .mutate({
          mutation
        })
        .then(({ error, loading, data }) => {
          resolve(data.updateRestaurant);
        });
    });
  };

  removeRestaurant = restaurant => {
    return new Promise((resolve, reject) => {
      const mutation = REMOVE_RESTAURANT(restaurant);

      client
        .mutate({
          mutation
        })
        .then(({ error, loading, data }) => {
          resolve(data.removeRestaurant);
        });
    });
  };

  fetchRestaurantInfo = () => {
    const { restaurant } = this.state;
    const query = RESTAURANT(restaurant);

    if (restaurant) {
      client
        .query({ query, fetchPolicy: "network-only" })
        .then(({ error, loading, data }) => {
          const { name, tags, menu, address } = data.restaurant;
          const newTags = tags.join();
          const newMenu = [
            ...menu.map(
              (singleMenu, i) => singleMenu.name + ":" + singleMenu.price
            )
          ].join("\n");
          // GraphQL 에 맞게 파싱

          this.setState({
            name,
            tags: newTags,
            menu: newMenu,
            address
          });
        });
    }
  };

  clearForm = () => {
    this.setState({
      restaurant: "",
      name: "",
      tags: "",
      menu: "",
      address: "",
      url: ""
    });
  };

  componentWillReceiveProps(nextProps) {
    const { restaurant } = nextProps;
    this.setState(
      {
        restaurant
      },
      () => this.fetchRestaurantInfo()
    );
  }

  render() {
    const { restaurant, name, tags, menu, address, url } = this.state;
    const {
      onAddRestaurant,
      onRemoveRestaurant,
      onModifyRestaurant
    } = this.props;

    return (
      <Form
        id={restaurant}
        name={name}
        tags={tags}
        menu={menu}
        address={address}
        url={url}
        isNew={restaurant === ""}
        onNameChange={this.handleNameChange}
        onTagChange={this.handleTagChange}
        onMenuChange={this.handleMenuChange}
        onAddressChange={this.handleAddressChange}
        onURLChange={this.handleURLChange}
        onConfirmClick={this.handleConfirmClick}
        onRemoveClick={this.handleRemoveClick}
        onAddRestaurant={onAddRestaurant}
        onRemoveRestaurant={onRemoveRestaurant}
        onModifyRestaurant={onModifyRestaurant}
      />
    );
  }
}

export default FormContainer;
