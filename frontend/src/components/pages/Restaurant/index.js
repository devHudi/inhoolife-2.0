import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faMap,
  faComments
} from "@fortawesome/free-regular-svg-icons";
import { WidthLimiter, Navigation } from "../../commons";
import {
  HeaderContainer,
  MenuListContainer,
  MapContainer,
  CommentContainer
} from "./containers";

class Restaurant extends Component {
  render() {
    const restaurantID = this.props.match.params.id;

    return (
      <RestaurantWrapper>
        <HeaderContainer restaurantID={restaurantID} />
        <WidthLimiter noPadding>
          <Section>
            <Title>
              <FontAwesomeIcon
                icon={faListAlt}
                style={{ marginRight: "10px" }}
              />
              메뉴
            </Title>
            <MenuListContainer restaurantID={restaurantID} />
          </Section>

          <Section>
            <Title>
              <FontAwesomeIcon icon={faMap} style={{ marginRight: "10px" }} />
              지도
            </Title>
            <MapContainer restaurantID={restaurantID} />
          </Section>

          <Section>
            <Title>
              <FontAwesomeIcon
                icon={faComments}
                style={{ marginRight: "10px" }}
              />
              평가
            </Title>
            <CommentContainer restaurantID={restaurantID} />
          </Section>
        </WidthLimiter>
        <Navigation />
      </RestaurantWrapper>
    );
  }
}

const RestaurantWrapper = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.6s opacity;
`;

const Section = styled.section`
  margin-bottom: 10px;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 16pt;
`;

export default Restaurant;
