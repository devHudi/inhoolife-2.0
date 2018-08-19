import React, { Component, Fragment } from "react";
import { Grid, Sidebar } from "../../commons";
import { TypeList } from "./components";
import { TagListContainer } from "./containers";

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "major"
    };
  }

  handleChangeType = type => {
    this.setState({
      type
    });
  };

  render() {
    const { type } = this.state;

    return (
      <Fragment>
        <Grid
          first={<Sidebar active="tag" />}
          second={<TypeList type={type} onChangeType={this.handleChangeType} />}
          third={<TagListContainer type={type} />}
        />
      </Fragment>
    );
  }
}

export default Restaurants;
