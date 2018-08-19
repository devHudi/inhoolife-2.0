import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faOutlineHeart } from "@fortawesome/free-regular-svg-icons";
import { Parallax } from "react-parallax";
import { DimmerWrapper, WidthLimiter } from "../../../commons";
import { LikeButtonContainer } from "../containers";

const Header = ({ image, tags, title, restaurantId }) => {
  return (
    <HeaderWrapper>
      <Parallax blur={{ min: -15, max: 15 }} strength={200} bgImage={image}>
        <DimmerWrapper opacity={0.4} height="280px">
          <WidthLimiter noPadding>
            <Link to="/">
              <BackButton>
                <FontAwesomeIcon icon={faChevronLeft} color="#ffffff" />{" "}
                뒤로가기
              </BackButton>
            </Link>

            <Tags> {tags.map(tag => `#${tag} `)} </Tags>
            <Title> {title} </Title>

            <LikeButtonContainer restaurantId={restaurantId} />
          </WidthLimiter>
        </DimmerWrapper>
      </Parallax>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 280px;
  background-size: cover;
  background-position: center;
`;

const Tags = styled.div`
  margin: 70px 0 2px 0;
  text-align: center;
  font-size: 15pt;
  text-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
  color: #ffffff;
`;

const Title = styled.h1`
  margin-bottom: 2px;
  text-align: center;
  font-size: 30pt;
  font-weight: bold;
  text-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
  letter-spacing: -3px;
  color: #ffffff;
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

const LikeButtonWrapper = styled.div`
  margin-top: 60px;
  padding: 0 10px;
  width: 100%;
  text-align: right;
`;

const LikeButton = styled.button`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 100px;
  font-size: 13pt;
  color: #ffffff;
`;

export default Header;
