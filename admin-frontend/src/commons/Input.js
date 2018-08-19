import React from "react";
import styled from "styled-components";

const Input = ({ value, textarea, placeholder, width, rows, onChange }) => {
  if (textarea) {
    return (
      <TextareaWrapper
        value={value}
        rows={rows}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
      />
    );
  } else {
    return (
      <InputWrapper
        value={value}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
      />
    );
  }
};

const InputWrapper = styled.input`
  margin-bottom: 5px;
  padding: 15px;
  width: ${props => (props.width ? props.width : "100%")};
  border: 3px solid #dcddde;
  background-color: #ffffff;
  font-size: 12pt;
`;

const TextareaWrapper = styled.textarea`
  margin-bottom: 5px;
  padding: 15px;
  width: ${props => (props.width ? props.width : "100%")};
  border: 3px solid #dcddde;
  background-color: #ffffff;
  font-size: 12pt;
`;

export default Input;
