import React, { Component, Fragment } from "react";
import { Grid, Sidebar } from "../../commons";
import { RestaurantListContainer, FormContainer } from "./containers";

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.list = React.createRef();
    this.form = React.createRef();

    this.state = {
      restaurant: null
    };
  }

  handleChangeRestaurant = id => {
    this.setState({
      restaurant: id
    });
  };

  handleAddRestaurant = restaurant => {
    this.list.current.addItem(restaurant);
    this.form.current.clearForm();
  };

  handleRemoveRestaurant = id => {
    this.list.current.removeItem(id);
    this.form.current.clearForm();
  };

  handleNewRestaurant = () => {
    this.form.current.clearForm();
  };

  render() {
    const { restaurant } = this.state;

    return (
      <Fragment>
        <Grid
          first={<Sidebar active="restaurant" />}
          second={
            <RestaurantListContainer
              ref={this.list}
              restaurant={restaurant}
              onChangeRestaurant={this.handleChangeRestaurant}
              onNewRestaurant={this.handleNewRestaurant}
            />
          }
          third={
            <FormContainer
              ref={this.form}
              restaurant={restaurant}
              onAddRestaurant={this.handleAddRestaurant}
              onRemoveRestaurant={this.handleRemoveRestaurant}
            />
          }
        />
      </Fragment>
    );
  }
}

export default Restaurants;
