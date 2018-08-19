import React from "react";
import styled from "styled-components";

const Card = ({ title, tags, image, like, onClick }) => {
  return (
    <CardWrapper image={image}>
      <GradientDimmer>
        <TextWrapper>
          <Tags> {tags.map((tag, i) => `#${tag} `)} </Tags>
          <Title> {title} </Title>
        </TextWrapper>
      </GradientDimmer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: #ffffff;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
`;

const GradientDimmer = styled.div`
  position: relative;
  padding: 15px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.8)
  );
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 15px;
`;

const Tags = styled.div`
  padding-top: 80px;
  font-size: 13pt;
  color: #ffffff;
`;

const Title = styled.div`
  font-size: 25pt;
  font-weight: bold;
  color: #ffffff;
`;

export default Card;
