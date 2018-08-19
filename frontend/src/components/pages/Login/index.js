import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WidthLimiter, Navigation } from "../../commons";
import { LoginFormContainer } from "./containers";
import logo from "../../../img/black_logo.png";

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <WidthLimiter>
          <LogoWrapper>
            <Logo src={logo} />
            <Subtitle> 로그인 </Subtitle>
          </LogoWrapper>
          <LoginFormContainer />
          <RegisterLink>
            <Link to="/register">아직 회원이 아니신가요?</Link>
          </RegisterLink>
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

export default Login;
