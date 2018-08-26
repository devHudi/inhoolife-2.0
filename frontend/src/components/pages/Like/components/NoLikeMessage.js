import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const NoLikeMessage = () => {
  return (
    <Message>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        color="#868e96"
        size="2x"
        style={{ marginBottom: "10px" }}
      />
      <br />
      이런, 아직 좋아하시는 식당이 없군요!
      <br />
      식당 페이지에서 좋아요를 누르신 목록이 이곳에 보여집니다.
    </Message>
  );
};

const Message = styled.div`
  margin: 50px 0;
  font-size: 11pt;
  color: #868e96;
  text-align: center;
`;

export default NoLikeMessage;
