import React, { Fragment } from "react";
import styled from "styled-components";
import { WidthLimiter, Navigation } from "../../commons";
import { FormContainer } from "./containers";

const Suggest = () => {
  return (
    <Fragment>
      <WidthLimiter>
        <FormContainer />
        <OpenChat>
          또는 <a href="https://open.kakao.com/o/sP8bpJW">카카오톡 오픈채팅</a>
          을 통해 채팅 문의가 가능합니다.
        </OpenChat>
      </WidthLimiter>
      <Navigation active="menu" />
    </Fragment>
  );
};

const OpenChat = styled.div`
  margin-top: 10px;
  a {
    color: #228be6;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export default Suggest;
