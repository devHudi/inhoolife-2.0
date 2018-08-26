import React, { Fragment } from "react";
import styled from "styled-components";
import { Button } from "../../../commons";

const Form = ({ value, onChange, onSendClick }) => {
  return (
    <Fragment>
      <Label>* 답변이 필요하시다면, 연락받으실 이메일을 꼭 기재해주세요.</Label>
      <TextArea
        onChange={onChange}
        rows="10"
        placeholder="문의 내용을 적어주세요"
        value={value}
      />
      <Button onClick={onSendClick}> 전송 </Button>
    </Fragment>
  );
};

const Label = styled.div`
  margin: 30px 0 10px 0;
  font-size: 11pt;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 5px;
  padding: ${props => (props.big ? "12px 15px" : "8px")};
  border: 1px solid #c7ced5;
  border-radius: 0;
  background-color: #ffffff;
  color: #000000;
  font-size: 12pt;
  font-weight: normal;
`;

export default Form;
