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
        alert("회원가입 되었습니다. 로그인을 해주세요.");
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        let message = null;
        if (error.message === "GraphQL error: id is necessary")
          message = "아이디를 입력해주세요.";
        else if (error.message === "GraphQL error: nickname is necessary")
          message = "닉네임을 입력해주세요.";
        else if (error.message === "GraphQL error: password is necessary")
          message = "비밀번호를 입력해주세요.";
        else if (error.message === "GraphQL error: user exists")
          message = "이미 존재하는 유저입니다.";
        else if (error.message === "GraphQL error: id validation error")
          message =
            "아이디 형식이 맞지 않습니다. 영문, 숫자, 언더바만을 이용하여 구성해주세요.";

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
