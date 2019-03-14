import React, { Component, Fragment } from "react";
import styled from "styled-components";
import {
  Spinner,
  DimmerWrapper,
  WidthLimiter,
  Navigation
} from "../../commons";
import { TagGroupContainer, CardListContainer } from "./containers";
import { Guide } from "./components";
import logo from "../../../img/logo.png";
import mainHeaderBackground from "../../../img/main_header_background.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTags: [],
      isSpinnerOpened: false,
      isCardListOpened: false,
      isDetailRestaurantCardOpened: false
    };
  }

  openCardList = () => {
    this.setState({
      isCardListOpened: true
    });
  };

  handleTagClick = (tag, isSelected) => {
    let newSelectedTags = this.state.selectedTags;

    if (isSelected) {
      newSelectedTags.push(tag);
    } else {
      for (let i = 0; i < newSelectedTags.length; i++) {
        if (newSelectedTags[i] === tag) newSelectedTags.splice(i, 1);
      }
    }

    this.setState({
      selectedTags: newSelectedTags
    });
  };

  handleRoulletButtonClick = () => {
    const spinnerDuration = 2000;

    this.setState(
      {
        isSpinnerOpened: true
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              isSpinnerOpened: false
            },
            this.openCardList
          );
        }, spinnerDuration);
      }
    );
  };

  handleCloseCardList = () => {
    this.setState({
      isCardListOpened: false
    });
  };

  handleOpenDetail = () => {
    this.setState({
      isDetailRestaurantCardOpened: true
    });
  };

  handleCloseDetail = () => {
    this.setState({
      isDetailRestaurantCardOpened: false
    });
  };

  render() {
    const {
      isSpinnerOpened,
      isCardListOpened,
      isDetailRestaurantCardOpened
    } = this.state;

    return (
      <Fragment>
        <Navigation active="home" />
        <Guide />
        <CardListContainer
          tags={this.state.selectedTags}
          blur={isDetailRestaurantCardOpened}
          onCardClick={this.handleOpenDetail}
          onCloseClick={this.handleCloseCardList}
          isOpened={isCardListOpened}
        />
        <Spinner isOpened={isSpinnerOpened} text="음식점을 고르고 있습니다!" />
        <Header>
          <DimmerWrapper>
            <WidthLimiter>
              <LogoImage src={logo} />
              <Slogan> 오늘 점심은 제가 정해드리죠 </Slogan>
              <RoulleteButton onClick={this.handleRoulletButtonClick}>
                음식점 고르기
              </RoulleteButton>
            </WidthLimiter>
          </DimmerWrapper>
        </Header>
        <TagSelectorWrapper>
          <WidthLimiter>
            <TagGroupContainer
              title="대분류"
              type="major"
              onClick={this.handleTagClick}
            />

            <TagGroupContainer
              title="소분류"
              type="minor"
              onClick={this.handleTagClick}
            />
          </WidthLimiter>
        </TagSelectorWrapper>
      </Fragment>
    );
  }
}

const Header = styled.header`
  text-align: center;
  height: 320px;
  background-image: url(${mainHeaderBackground});
  background-size: cover;
  background-position: center;
`;

const RoulleteButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 320px;
  border: 2px solid #ffffff;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 15pt;
  cursor: pointer;
  transition: 0.3s background-color, 0.3s letter-spacing, 0.3s color;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    letter-spacing: 10px;
    color: #000000;
  }
`;

const LogoImage = styled.img`
  margin-top: 50px;
  width: 300px;
`;

const Slogan = styled.p`
  margin: 10px 0 15px 0;
  font-size: 14pt;
  font-weight: lighter;
  color: #ffffff;
`;

const TagSelectorWrapper = styled.div`
  margin: 30px 0;
  padding-bottom: 62.3333px;
`;

const EventWrapper = styled.div`
  text-align: center;
`;

export default Home;
