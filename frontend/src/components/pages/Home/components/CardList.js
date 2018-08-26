import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import preventHorizontalScrolling from "../../../../lib/preventHorizontalScrolling";
import { WidthLimiter, CloseButton } from "../../../commons";
import { Card } from "../components";

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

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: true,
      adaptiveHeight: false,
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

          <Slider
            className={data.length === 1 ? "single-item" : ""}
            {...settings}
          >
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s -webkit-filter, 0.6s opacity;

  .slick-slide {
    opacity: 0.3;
    transform: scale(0.8);
    transition: 0.3s opacity, 0.3s transform;
  }

  .single-item .slick-slide {
    opacity: 1;
    transform: scale(0.95);
  }

  .slick-slide.slick-active {
    opacity: 1;
    transform: scale(0.95);
  }
`;

const CardListTags = styled.h1`
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
