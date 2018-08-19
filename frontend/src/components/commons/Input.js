import styled from "styled-components";

const Input = styled.input`
  width: ${props => (props.width ? props.width : "100%")};
  margin-bottom: 5px;
  padding: ${props => (props.big ? "12px 15px" : "8px")};
  border: 1px solid #c7ced5;
  border-radius: 0;
  background-color: #ffffff;
  color: #000000;
  font-size: ${props => (props.big ? "15pt" : "13pt")};
  font-weight: normal;
`;

export default Input;
