import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CloseButton = ({ space, onClick }) => {
  return (
    <CloseButtonWrapper space={space} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} />
    </CloseButtonWrapper>
  );
};

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: ${props => props.space}px;
  right: ${props => props.space}px;
  width: 30px;
  height: 30px;
  padding-top: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 100px;
  display: inline-block;
  font-size: 12pt;
  text-align: center;
  cursor: pointer;
  z-index: 1002;
`;

export default CloseButton;
