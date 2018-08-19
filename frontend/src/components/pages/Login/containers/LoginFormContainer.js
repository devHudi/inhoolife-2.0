import React, { Component } from "react";
import client from "../../../../apollo/client";
import { LOGIN } from "../../../../apollo/queries";
import { LoginForm } from "../components";

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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

  handleChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleClickLogin = () => {
    const { id, password } = this.state;
    const query = LOGIN(id, password);

    client
      .query({
        query
      })
      .then(result => {
        localStorage.setItem("jwt", result.data.login);
        this.setState(
          {
            redirect: true
          },
          () => {
            alert("로그인 됐습니다.");
          }
        );
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
      <LoginForm
        onChangeid={this.handleChangeid}
        onChangePassword={this.handleChangePassword}
        onClickLogin={this.handleClickLogin}
        redirect={redirect}
        error={error}
      />
    );
  }
}

export default LoginFormContainer;
