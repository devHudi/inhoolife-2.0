import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-regular-svg-icons";
import {
  FullscreenCard,
  Input,
  InputButton,
  CloseButton,
  WidthLimiter
} from "../../components";

const Buttons = ({ isLiked }) => {
  return (
    <ButtonsWrapper>
      <Button>
        <ButtonIcon>
          <FontAwesomeIcon icon={solidHeart} />
        </ButtonIcon>
        <ButtonText>좋아요</ButtonText>
      </Button>
      <Button>
        <ButtonIcon>
          <FontAwesomeIcon icon={faPencilAlt} />
        </ButtonIcon>
        <ButtonText>평가하기</ButtonText>
      </Button>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #ced4da;
`;

const Button = styled.div`
  width: 50%;
  display: inline-block;
  text-align: center;
`;

const ButtonIcon = styled.div`
  font-size: 25pt;
`;

const ButtonText = styled.div`
  font-size: 11pt;
`;

const CommentList = () => {
  return (
    <Fragment>
      <CommentTitle> 평가 </CommentTitle>
      <CommentWrapper>
        <CommentAuthor color="#838048"> 익명 838048 </CommentAuthor>
        <CommentBody> 여기 나쁘지 않음 </CommentBody>
      </CommentWrapper>
      <CommentWrapper>
        <CommentAuthor color="#00ef0d"> 익명 00ef0d </CommentAuthor>
        <CommentBody> ㄹㅇ 회식갈때 여기만 감 ㅋㅋ </CommentBody>
      </CommentWrapper>
      <CommentWrapper>
        <CommentAuthor color="#59c9c6"> 익명 59c9c6 </CommentAuthor>
        <CommentBody> 나 운영체제 B 에서 B+ 됨 </CommentBody>
      </CommentWrapper>
      <Input width="80%" placeholder="평가를 입력해주세요" />
      <InputButton width="19%"> 입력 </InputButton>
    </Fragment>
  );
};

const CommentTitle = styled.h1`
  margin-bottom: 10px;
`;

const CommentWrapper = styled.div``;

const CommentAuthor = styled.span`
  font-size: 12pt;
  color: ${props => props.color};
`;

const CommentBody = styled.span`
  font-size: 12pt;
  font-weight: 300;
  color: #343a40;
`;

const ImagePreview = ({ images }) => {
  return (
    <Fragment>
      <Row>
        <Image image={images[0]} />
        <Image image={images[1]} />
        <Image image={images[2]} />
      </Row>
      <Row>
        <Image image={images[3]} />
        <Image image={images[4]} />
        <Image image={images[5]} />
      </Row>
    </Fragment>
  );
};

const Row = styled.div`
  display: flex;
`;

const Image = styled.div`
  width: 33.3333%;
  padding-top: 33.3333%;
  background-image: url(${props =>
    props.image ? props.image : "http://placehold.it/300x300?text=no-image"});
  background-size: cover;
  background-position: center;
  &:last-child {
    margin-right: 0;
  }
`;

class DetailRestaurantCard extends Component {
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
    const { title, tags, like, images, isOpened, onCloseClick } = this.props;
    const { hideToBottom } = this.state;

    return (
      <DetailRestaurantCardWrapper
        hideToBottom={hideToBottom}
        isOpened={isOpened}
      >
        <WidthLimiter>
          <FullscreenCard isOpened={isOpened}>
            <CloseButton onClick={onCloseClick} space={10} />
            <ImagePreview images={images} />
            <Section>
              <Title> {title} </Title>
              <Tags> {tags.map((tag, i) => `#${tag} `)} </Tags>
              <Like>
                <FontAwesomeIcon icon={faHeart} color="#fa5252" /> {like}
                명이 좋아합니다.
              </Like>
              <Buttons />
            </Section>
            <Section noPadding>
              <Map src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBXd0lbKKkNOVht3dUIirL_IDHVAeefIus&amp;q=%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9A%A9%ED%98%84%EB%8F%99%20186-19" />
            </Section>
            <Section>
              <CommentList />
            </Section>
          </FullscreenCard>
        </WidthLimiter>
      </DetailRestaurantCardWrapper>
    );
  }
}

const DetailRestaurantCardWrapper = styled.div`
  position: fixed;
  top: ${props => (props.hideToBottom ? "100%" : "0px")};
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.isOpened ? "1" : "0")};
  z-index: 1004;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  transition: 0.6s opacity;
`;

let Section = styled.section`
  padding: ${props => (props.noPadding ? "0" : "20px")};
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 25pt;
`;

const Tags = styled.div`
  margin-bottom: 10px;
  font-size: 15pt;
  color: #495057;
`;

const Like = styled.div`
  font-size: 11pt;
`;

const Map = styled.iframe`
  width: 100%;
  height: 250px;
  border: none;
`;

export default DetailRestaurantCard;
