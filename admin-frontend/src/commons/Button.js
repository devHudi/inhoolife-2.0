import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 5px;
  margin-left: 5px;
  padding: 10px 20px;
  width: ${props => (props.width ? props.width : "auto")};
  border: 3px solid #dcddde;
  background-color: "#ffffff";
  font-size: 12pt;
  cursor: pointer;

  &:hover {
    background-color: #f7f8f9;
  }

  &:active {
    background-color: #e6e9ed;
  }
`;

export default Button;
