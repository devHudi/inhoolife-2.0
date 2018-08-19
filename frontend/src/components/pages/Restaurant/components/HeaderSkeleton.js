import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { WidthLimiter } from "../../../commons";

const HeaderSkeleton = () => {
  return (
    <HeaderWrapper>
      <WidthLimiter noPadding>
        <Link to="/">
          <BackButton>
            <FontAwesomeIcon icon={faChevronLeft} color="#ffffff" /> 뒤로가기
          </BackButton>
        </Link>
      </WidthLimiter>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 280px;
  background-color: #8e8e8e;
  background-size: cover;
  background-position: center;
`;

const BackButton = styled.button`
  position: relative;
  top: 10px;
  left: 10px;
  border: none;
  background-color: transparent;
  font-size: 14pt;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
`;

export default HeaderSkeleton;
