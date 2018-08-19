import React from "react";
import styled from "styled-components";
import { Tag } from "../components";

const TagGroup = ({ title, tags, onClick }) => {
  return (
    <TagGroupWrapper>
      <Title> # {title} </Title>
      {tags.map((tag, i) => (
        <Tag isSelected={false} name={tag.name} key={i} onClick={onClick} />
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

export default TagGroup;
