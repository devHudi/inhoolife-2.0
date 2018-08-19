import React, { Component } from "react";
import styled from "styled-components";
import { WidthLimiter, Navigation } from "../../commons";
import { RegisterFormContainer } from "./containers";
import logo from "../../../img/black_logo.png";

//TODO: 에러메세지가 없는데 추가해야함

class Register extends Component {
  render() {
    return (
      <LoginWrapper>
        <WidthLimiter>
          <LogoWrapper>
            <Logo src={logo} />
            <Subtitle> 회원가입 </Subtitle>
          </LogoWrapper>
          <RegisterFormContainer />
          <RegisterLink />
        </WidthLimiter>
        <Navigation active="login" />
      </LoginWrapper>
    );
  }
}

const Logo = styled.img`
  margin: 50px auto 0 auto;
  width: 200px;
`;

const Subtitle = styled.div`
  margin-bottom: 20px;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

const LoginWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const RegisterLink = styled.div`
  margin-top: 10px;
  a {
    color: #868e96;
    text-decoration: underline;
  }
`;

export default Register;
