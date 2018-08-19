import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input, Button } from "../../../commons";

const CommentInput = ({ isTokenExists, onClick, onChange, value }) => {
  if (isTokenExists) {
    return (
      <CommentInputWrapper>
        <Input
          value={value}
          width="80%"
          placeholder="평가를 입력해주세요"
          onChange={onChange}
        />
        <Button type="submit" width="19%" onClick={onClick}>
          입력
        </Button>
      </CommentInputWrapper>
    );
  } else {
    return (
      <NoLoginMessage>
        <Link to="/login">로그인</Link>
        하시면 평가를 입력할 수 있습니다.
      </NoLoginMessage>
    );
  }
};

const CommentInputWrapper = styled.div`
  margin-top: 20px;
`;

const NoLoginMessage = styled.div`
  margin: 10px 0;
  text-align: center;
  color: #495057;
  a {
    color: #228be6;
    text-decoration: underline;
  }
`;

export default CommentInput;
