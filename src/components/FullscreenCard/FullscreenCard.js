import React from "react";
import styled from "styled-components";

const FullscreenCard = ({ isOpened, children }) => {
  return (
    <FullscreenCardWrapper isOpened={isOpened}>
      {children}
    </FullscreenCardWrapper>
  );
};

const FullscreenCardWrapper = styled.div`
  position: relative;
  width: 100%;
  -webkit-clip-path: inset(0 0 0 0 round 15px);
  clip-path: inset(0 0 0 0 round 15px);
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  margin-top: ${props => (props.isOpened ? "0%" : "100%")};
  transition: 0.6s margin;
`;

export default FullscreenCard;
