import React from "react";
import styled from "styled-components";

const ErrorBox = ({ message }) => {
  return <ErrorBoxWrapper> {message} </ErrorBoxWrapper>;
};

const ErrorBoxWrapper = styled.div`
  margin: 10px 0;
  padding: 15px;
  background-color: #fa5252;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
`;

export default ErrorBox;
