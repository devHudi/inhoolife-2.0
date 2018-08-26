import React, { Component } from "react";
import client from "../../../../apollo/client";
import { SUGGEST } from "../../../../apollo/queries";
import { Form } from "../components";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSendClick = () => {
    const { text } = this.state;
    const mutation = SUGGEST(text);
    client.mutate({ mutation }).then(({ error, loading, data }) => {
      alert("소중한 의견 감사합니다!");
      this.setState({
        text: ""
      });
    });
  };

  render() {
    const { text } = this.state;
    return (
      <Form
        value={text}
        onChange={this.handleChange}
        onSendClick={this.handleSendClick}
      />
    );
  }
}

export default FormContainer;
