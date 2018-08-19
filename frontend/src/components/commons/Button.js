import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  width: ${props => (props.width ? props.width : "100%")};
  padding: ${props => (props.big ? "12px" : "8px")};
  border: none;
  background-color: ${props => (props.primary ? "#0070FF" : "#2E3338")};
  font-size: 13pt;
  color: #ffffff;
`;

export default Button;
