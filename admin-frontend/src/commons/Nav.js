import React from "react";
import styled from "styled-components";
import logoImage from "../img/black_logo.png";

const Nav = ({ user }) => (
  <NavContainer>
    <Logo src={logoImage} />
    <LogoText> 관리자 페이지 1.0 </LogoText>
  </NavContainer>
);

const NavContainer = styled.nav`
  z-index: 999;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 3px solid #dcddde;
`;

const Logo = styled.img`
  height: 100%;
`;

const LogoText = styled.div`
  margin-left: 10px;
  height: 100%;
  display: inline-block;
  color: #adb5bd;
`;

export default Nav;
