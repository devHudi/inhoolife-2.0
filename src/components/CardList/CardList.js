import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import preventHorizontalScrolling from "../../lib/preventHorizontalScrolling";
import { Card, CloseButton, WidthLimiter } from "../../components";

class RestaurantCard extends Component {
  componentDidMount() {
    preventHorizontalScrolling();
  }

  render() {
    const { title, tags, images, onClick } = this.props;

    return (
      <Card width="300px" height="300px" onClick={onClick}>
        <CardTitle>{title}</CardTitle>
        <CardTags>{tags.map(tag => `#${tag} `)}</CardTags>
        <CardImages>
          {images.map((image, i) => {
            return <CardImage src={image} />;
          })}
        </CardImages>
        <CardLike>
          <FontAwesomeIcon icon={faHeart} color="#fa5252" /> {this.props.like}
          명이 좋아합니다.
        </CardLike>
      </Card>
    );
  }
}

const CardTitle = styled.h1`
  margin-bottom: 0px;
  font-size: 20pt;
  font-weight: bolder;
`;

const CardTags = styled.div`
  margin-bottom: 10px;
  font-size: 12pt;
  color: #495057;
`;

const CardImages = styled.div`
  display: flex;
  height: 140px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const CardImage = styled.img`
  height: 100%;
  margin-right: 10px;
`;

const CardLike = styled.div`
  text-align: right;
  font-size: 11pt;
  margin-top: 15px;
`;

class CardList extends Component {
  constructor(props) {
    super(props);

    this.timeout = 0;
    //식당 카드 숨기는 타임아웃 아이디

    this.state = {
      hideToBottom: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isOpened } = nextProps;

    if (isOpened === false) {
      this.timeout = setTimeout(() => {
        this.setState({
          hideToBottom: true
        });
      }, 600);
    } else if (isOpened === true) {
      clearTimeout(this.timeout);
      this.setState({
        hideToBottom: false
      });
    }
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      adaptiveHeight: true
    };

    const {
      tags,
      data,
      blur,
      isOpened,
      onCardClick,
      onCloseClick
    } = this.props;
    const { hideToBottom } = this.state;

    return (
      <CardListWrapper
        isOpened={isOpened}
        hideToBottom={hideToBottom}
        blur={blur}
      >
        <WidthLimiter>
          <CloseButton onClick={onCloseClick} space={20} />
          <CardListTags> {tags.map(tag => `#${tag} `)} </CardListTags>
          <CardListInfoText big>
            좌우로 스크롤하여 더 많은 결과를 보세요
          </CardListInfoText>

          <Slider {...settings}>
            {data.map((card, i) => {
              return (
                <RestaurantCard
                  title={card.title}
                  tags={card.tags}
                  images={card.images}
                  like={card.like}
                  onClick={onCardClick}
                />
              );
            })}
          </Slider>

          <CardListInfoText>자세히 보려면 클릭하세요.</CardListInfoText>
        </WidthLimiter>
      </CardListWrapper>
    );
  }
}

const CardListWrapper = styled.div`
  filter: blur(${props => (props.blur ? "7px" : "0")});
  position: fixed;
  top: ${props => (props.hideToBottom ? "100%" : "0px")};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 1001;
  opacity: ${props => (props.isOpened ? "1" : "0")};
  transition: 0.6s -webkit-filter, 0.6s opacity;
`;

const CardListTags = styled.h1`
  margin-top: 60px;
  font-size: 25pt;
  color: #ffffff;
  text-align: center;
`;

const CardListInfoText = styled.div`
  margin: ${props => (props.big ? "10px 0 20px 0" : "20px 0 0 0")};
  font-size: ${props => (props.big ? "12pt" : "10pt")};
  color: #ffffff;
  text-align: center;
`;

export default CardList;
