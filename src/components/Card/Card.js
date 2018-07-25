import React from "react";
import styled, { css } from "styled-components";

const Card = styled.div`
  width: 90%;
  max-width: ${props => props.width};
  height: ${props => props.height};
  padding: 20px;
  margin: 0 auto 15px auto;
  background-color: #ffffff;
  -webkit-clip-path: inset(0 0 0 0 round 15px);
  clip-path: inset(0 0 0 0 round 15px);
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

export default Card;
