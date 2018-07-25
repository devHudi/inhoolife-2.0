import React from "react";
import styled from "styled-components";

const Input = styled.input`
  -webkit-appearance: none;
  width: ${props => (props.width ? props.width : "100%")};
  margin: 15px 1% 0 0;
  padding: ${props => (props.big ? "8px 10px" : "5px")};
  border: ${props =>
    props.outline ? "2px solid #ffffff" : "1px solid #212529"};
  border-radius: 0;
  background-color: ${props => (props.outline ? "transparent" : "#ffffff")};
  color: ${props => (props.outline ? "#ffffff" : "#000000")};
  font-size: ${props => (props.big ? "15pt" : "12pt")};
  font-weight: ${props => (props.outline ? "lighter" : "normal")};
`;

export default Input;
