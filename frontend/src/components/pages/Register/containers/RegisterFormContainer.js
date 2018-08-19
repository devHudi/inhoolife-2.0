import React, { Component } from "react";
import client from "../../../../apollo/client";
import { REGISTER } from "../../../../apollo/queries";
import { RegisterForm } from "../components";

class RegisterFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      nickname: "",
      password: "",
      redirect: false,
      error: null
    };
  }

  handleChangeid = e => {
    this.setState({
      id: e.target.value
    });
  };

  handleChangeNickname = e => {
    this.setState({
      nickname: e.target.value
    });
  };

  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleClickRegister = () => {
    const { id, nickname, password } = this.state;
    const mutation = REGISTER(id, nickname, password);

    client
      .mutate({
        mutation
      })
      .then(result => {
        localStorage.setItem("jwt", result.data.login);
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        let message = null;
        if (error.message === "GraphQL error: user dose not exists")
          message = "존재하지 않는 사용자입니다.";
        else if (error.message === "GraphQL error: invalid password")
          message = "비밀번호가 올바르지 않습니다.";

        this.setState({
          error: message
        });
      });
  };

  render() {
    const { redirect, error } = this.state;

    return (
      <RegisterForm
        onChangeid={this.handleChangeid}
        onChangeNickname={this.handleChangeNickname}
        onChangePassword={this.handleChangePassword}
        onClickRegister={this.handleClickRegister}
        redirect={redirect}
        error={error}
      />
    );
  }
}

export default RegisterFormContainer;
