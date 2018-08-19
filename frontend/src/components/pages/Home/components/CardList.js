import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import preventHorizontalScrolling from "../../../../lib/preventHorizontalScrolling";
import { WidthLimiter, CloseButton } from "../../../commons";
import { Card } from "../components";

//TODO: PC 에서 슬라이드 안되는 오류
//TODO: 카드가 하나만 있으면 출력되지 않는 오류

const HOST = process.env.REACT_APP_BACKEND_HOST;

class CardList extends Component {
  constructor(props) {
    super(props);

    this.timeout = 0;
    //식당 카드 숨기는 타임아웃 아이디

    this.state = {
      hideToBottom: true,
      isDragging: false
    };
  }

  componentDidMount() {
    preventHorizontalScrolling();
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

  handleClick = e => {
    if (this.state.isDragging) {
      e.preventDefault();
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isDragging === nextState.isDragging;
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      adaptiveHeight: true,
      draggable: true,
      beforeChange: () => this.setState({ isDragging: true }),
      afterChange: () => this.setState({ isDragging: false })
    };

    const { data, blur, isOpened, onCardClick, onCloseClick } = this.props;
    let { tags } = this.props;
    const { hideToBottom } = this.state;

    if (tags.length === 0) tags = ["모든태그"];

    return (
      <CardListWrapper
        isOpened={isOpened}
        hideToBottom={hideToBottom}
        blur={blur}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <WidthLimiter noPadding>
          <CloseButton onClick={onCloseClick} space={20} />
          <CardListTags>{tags.map(tag => `#${tag} `)}</CardListTags>
          <CardListInfoText big>
            좌우로 넘겨서 더 많은 식당을 보세요
          </CardListInfoText>

          <Slider {...settings}>
            {data.map((card, i) => {
              return (
                <Link
                  to={`restaurant/${card.id}`}
                  key={i}
                  onClick={this.handleClick}
                >
                  <Card
                    title={card.title}
                    tags={card.tags}
                    image={`http://${HOST}:4001/images/${card.id}.jpg`}
                    like={card.like}
                    onClick={onCardClick}
                  />
                </Link>
              );
            })}
          </Slider>

          <CardListInfoText>자세히 보려면 클릭하세요.</CardListInfoText>
        </WidthLimiter>
      </CardListWrapper>
    );
  }
}

//TODO: 하나만 카드리스트에 출력되면 아예 뜨지 않는 오류 해결

const CardListWrapper = styled.div`
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

  .slick-slide {
    opacity: 0.3;
    transform: scale(0.8);
    transition: 0.3s opacity, 0.3s transform;
  }

  .slick-slide.slick-active {
    opacity: 1;
    transform: scale(1);
  }
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
