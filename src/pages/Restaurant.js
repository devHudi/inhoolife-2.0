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
} from "../components";

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
  return <Header />;
};

const Header = styled.header`
  height: 300px;
  background-image: url("http://cfile30.uf.tistory.com/image/241D3F46592D7657168E42");
  background-size: cover;
  background-position: center;
`;

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

class Restaurant extends Component {
  render() {
    const images = [
      "http://mblogthumb3.phinf.naver.net/MjAxNzA0MTJfMjk0/MDAxNDkxOTY4NDYzODU0.dHO7OhiHVY3o_ACpr99iXkarVbe9iYW3mwScYDJGPxwg.UvffeLc02hHW7ltpDNZKpBOJDjgLnnAGzXZKyJ5rRn0g.JPEG.seulgi_0506/%EC%9A%B0%EC%84%A0%EC%86%8C%EA%B3%B1%EC%B0%BD.JPG?type=w800",
      "http://cfile9.uf.tistory.com/image/2506A53858F4228C095018",
      "http://mblogthumb4.phinf.naver.net/MjAxNzA0MTBfMTAx/MDAxNDkxODMwNTMyMTQ5.UbYWcE-xaDEcEeQ4YPCyBA-Iz5Ai4GHtltbqZhySSuYg.aJy-snH4_06caRod5WLhuG4Evlx1RTpg8jzbKRw_rXog.JPEG.eeeun29/%EA%B3%B1%EC%B0%BD%EB%B3%B6%EC%9D%8C%EB%B0%A5.jpg?type=w800",
      "http://mblogthumb4.phinf.naver.net/MjAxNzA0MTBfMTc2/MDAxNDkxODMwNzcwOTI4.OAIWc8TKpYTPR1jSSl9VHeJJPvW18ub0lb3ttoCKoHUg.NOAfo8RBNr8VnXfMF5NMG8x-PJwSwEF2B14upUduqWEg.JPEG.eeeun29/%EC%9D%B8%ED%95%98%EB%8C%80%ED%9B%84%EB%AC%B8%EB%A7%9B%EC%A7%91.jpg?type=w800",
      "https://t1.daumcdn.net/cfile/tistory/2619503358F4231909"
    ];

    return (
      <RestaurantWrapper>
        <ImagePreview images={images} />
        <Section>
          <Title> 제목 </Title>
          <Tags> #태그 </Tags>
          <Like>
            <FontAwesomeIcon icon={faHeart} color="#fa5252" /> 34 명이
            좋아합니다.
          </Like>
          <Buttons />
        </Section>
        <Section noPadding>
          <Map src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBXd0lbKKkNOVht3dUIirL_IDHVAeefIus&amp;q=%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9A%A9%ED%98%84%EB%8F%99%20186-19" />
        </Section>
        <Section>
          <CommentList />
        </Section>
      </RestaurantWrapper>
    );
  }
}

const RestaurantWrapper = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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

export default Restaurant;
