import React, { Fragment } from "react";
import styled from "styled-components";
import { Label, Input, Button } from "../../../commons";

const TagList = ({ tags, onChange, onClickSave }) => {
  return (
    <Fragment>
      <Label> 태그는 ,(쉼표) 로 구분합니다. </Label>
      <Input textarea rows="10" value={tags} onChange={onChange} />
      <AlignRight>
        <Button onClick={onClickSave}>저장</Button>
      </AlignRight>
    </Fragment>
  );
};

const AlignRight = styled.div`
  text-align: right;
`;

export default TagList;
