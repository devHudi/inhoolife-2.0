import React from "react";
import styled from "styled-components";
import { Tag } from "../components";

const TagGroup = ({ title, tags, searchbar, onClick, onChange }) => {
  return (
    <TagGroupWrapper>
      <Title> # {title} </Title>
      {searchbar ? (
        <Input placeholder="태그를 검색하세요 (예: 치킨)" onChange={onChange} />
      ) : (
        ""
      )}
      {tags.map((tag, i) => (
        <Tag
          isFiltered={tag.isFiltered}
          name={tag.name}
          key={i}
          onClick={onClick}
        />
      ))}
    </TagGroupWrapper>
  );
};

const Title = styled.h1`
  margin-bottom: 15px;
  padding: 0 1%;
  text-align: left;
  font-size: 16pt;
  font-weight: bold;
  color: #000000;
`;

const TagGroupWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0px;
  max-width: 320px;
  border-bottom: 1px solid #e5e4e7;
  &:last-child {
    border-bottom: none;
  }
`;

const Input = styled.input`
  margin: 0 1% 18px 1%;
  padding: 10px 15px;
  width: 100%;
  border: 2px solid #e9ecef;
  background-color: #ffffff;
  font-size: 11pt;
`;

export default TagGroup;
