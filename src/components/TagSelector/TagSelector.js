import React, { Component } from "react";
import styled from "styled-components";
import { Input, WidthLimiter } from "../../components";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Dimmer>
          <WidthLimiter>
            <LogoImage src="http://inhoolife.com/img/logo.png" />
            <Slogan> 오늘 점심은 제가 정해드리죠 </Slogan>
            <Input outline big width="80%" placeholder="태그를 검색하세요" />
          </WidthLimiter>
        </Dimmer>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.header`
  text-align: center;
  height: 300px;
  background-image: url("https://anandipaliwal.files.wordpress.com/2015/06/food-table-relisted.jpg");
  background-size: cover;
  background-position: center;
`;

const Dimmer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
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

class TagSelector extends Component {
  render() {
    const { blur, scrollable } = this.props;

    return (
      <TagSelectorWrapper blur={blur} scrollable={scrollable}>
        <Header />
        <WidthLimiter>
          <TagWrapper>
            <Title> # 추천 태그 </Title>
            <Tag> 고기 </Tag>
            <Tag isSelected> 치킨 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 면류 </Tag>
            <Tag isSelected> 면류 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 면류 </Tag>
          </TagWrapper>

          <TagWrapper>
            <Title> # 대분류 </Title>
            <Tag> 고기 </Tag>
            <Tag> 일식 </Tag>
            <Tag> 양식 </Tag>
            <Tag> 한식 </Tag>
            <Tag> 중식 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 술집 </Tag>
            <Tag> 혼밥 </Tag>
            <Tag> 디저트 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 술집 </Tag>
            <Tag> 혼밥 </Tag>
            <Tag> 디저트 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 술집 </Tag>
            <Tag> 혼밥 </Tag>
            <Tag> 디저트 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 술집 </Tag>
            <Tag> 혼밥 </Tag>
            <Tag> 디저트 </Tag>
            <Tag> 면류 </Tag>
            <Tag> 술집 </Tag>
            <Tag> 혼밥 </Tag>
            <Tag> 디저트 </Tag>
          </TagWrapper>
        </WidthLimiter>
      </TagSelectorWrapper>
    );
  }
}

const TagSelectorWrapper = styled.div`
  filter: blur(${props => (props.blur ? "7px" : "0")});
  overflow-y: ${props => (props.scrollable ? "scroll" : "hidden")};
  overflow: hidden;
  transition: 0.6s -webkit-filter;
`;

const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;
  font-size: 16pt;
  font-weight: bold;
  color: #000000;
`;

const TagWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Tag = styled.button`
  position: relative;
  -webkit-appearance: none;
  width: 20%;
  height: 50px;
  margin: 0 5px 10px 5px;
  top: ${props => (props.isSelected ? "-2px" : "0")};
  background-color: ${props => (props.isSelected ? "#343a40" : "#ffffff")};
  border: ${props =>
    props.isSelected ? "1px solid #343a40" : "1px solid #868e96"};
  border-radius: 0px;
  box-shadow: ${props =>
    props.isSelected
      ? "0 5px 7px rgba(0, 0, 0, .2)"
      : "0 2px 5px rgba(0, 0, 0, .2)"};
  font-size: 12pt;
  letter-spacing: -2px;
  color: ${props => (props.isSelected ? "#ffffff" : "#212529")};
  transition: 0.3s border, 0.3s color, 0.3s background-color;
`;

export default TagSelector;
