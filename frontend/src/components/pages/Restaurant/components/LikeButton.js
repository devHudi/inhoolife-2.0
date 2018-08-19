import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faOutlineHeart } from "@fortawesome/free-regular-svg-icons";

const LikeButton = ({ isLiked, likes, onClick }) => {
  return (
    <LikeButtonWrapper>
      <Button onClick={onClick}>
        {isLiked ? (
          <FontAwesomeIcon
            icon={faHeart}
            color="#f03e3e"
            style={{ marginRight: "7px" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faOutlineHeart}
            color="#ffffff"
            style={{ marginRight: "7px" }}
          />
        )}
        좋아요 ({likes})
      </Button>
    </LikeButtonWrapper>
  );
};

const LikeButtonWrapper = styled.div`
  margin-top: 60px;
  padding: 0 10px;
  width: 100%;
  text-align: right;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 100px;
  font-size: 13pt;
  color: #ffffff;
`;

export default LikeButton;
