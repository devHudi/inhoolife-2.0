import React, { Component } from "react";
import styled from "styled-components";

class Navigation extends Component {
  render() {
    return <Nav>인후라이프 2.0</Nav>;
  }
}

const Nav = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  text-align: center;
  font-weight: bold;
  color: #005baa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export default Navigation;
