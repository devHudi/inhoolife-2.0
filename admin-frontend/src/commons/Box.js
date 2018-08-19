import styled from "styled-components";

const Box = styled.div`
  margin-bottom: 5px;
  padding: ${props => (props.noPadding ? "0px" : "15px")};
  width: ${props => (props.width ? props.width : "auto")};
  border: 3px solid #dcddde;
  background-color: #ffffff;
`;

export default Box;
