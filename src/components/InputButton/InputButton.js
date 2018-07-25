import React from "react";
import styled from "styled-components";

const InputButton = styled.button`
  -webkit-appearance: none;
  width: ${props => (props.width ? props.width : "100%")};
  padding: 5px;
  background-color: #212529;
  border: 1px solid #212529;
  font-size: 12pt;
  color: #ffffff;
`;

export default InputButton;
