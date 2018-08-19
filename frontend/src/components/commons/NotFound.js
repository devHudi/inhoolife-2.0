import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => (
  <NotFoundWrapper>
    <CenterAlign>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        color="#868e96"
        size="2x"
        style={{ marginBottom: "10px" }}
      />
      <br />
      페이지를 찾을 수 없습니다.
      <br />
      <Link to="/"> 홈으로 </Link>
    </CenterAlign>
  </NotFoundWrapper>
);

const NotFoundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15pt;
  color: #868e96;

  a {
    margin-top: 10px;
    display: block;
    font-size: 12pt;
    text-decoration: underline;
  }
`;

const CenterAlign = styled.div`
  text-align: center;
`;

export default NotFound;
