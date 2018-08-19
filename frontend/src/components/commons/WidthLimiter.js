import styled from "styled-components";

const WidthLimiter = styled.div`
  padding: 0 ${props => (props.noPadding ? "" : "10px")};
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
`;

export default WidthLimiter;
