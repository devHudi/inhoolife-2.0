import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { DimmerWrapper, WidthLimiter } from "../../../commons";
import { LikeButtonContainer } from "../containers";

class Header extends Component {
  static contextTypes = {
    router: () => true
  };

  render() {
    const { image, tags, title, restaurantId } = this.props;
    return (
      <HeaderWrapper>
        <Background image={image}>
          <DimmerWrapper opacity={0.4} height="280px">
            <WidthLimiter noPadding>
              <BackButton onClick={this.context.router.history.goBack}>
                <FontAwesomeIcon icon={faChevronLeft} color="#ffffff" />{" "}
                뒤로가기
              </BackButton>

              <Tags> {tags.map(tag => `#${tag} `)} </Tags>
              <Title> {title} </Title>

              <LikeButtonContainer restaurantId={restaurantId} />
            </WidthLimiter>
          </DimmerWrapper>
        </Background>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  height: 280px;
  background-size: cover;
  background-position: center;
`;

const Background = styled.div`
  background-image: url(${props => props.image});
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

export default Header;
