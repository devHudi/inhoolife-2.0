import React, { Component } from "react";
import client from "../../../../apollo/client";
import {
  ALL_DETAIL_RESTAURANTS,
  RESTAURANTS_WITH_TAGS
} from "../../../../apollo/queries";
import { CardList } from "../components";

class CardListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isOpened, tags } = nextProps;

    let query = "";
    if (tags.length > 0) query = RESTAURANTS_WITH_TAGS(tags);
    else query = ALL_DETAIL_RESTAURANTS;

    if (isOpened) {
      client
        .query({
          query
        })
        .then(result => {
          const cardData = [];

          result.data.restaurants.map(restaurant => {
            cardData.push({
              id: restaurant.id,
              title: restaurant.name,
              tags: restaurant.tags,
              images: [
                "http://img.daily.co.kr/@files/www.daily.co.kr/content/food/2017/20170901/3b03901da9770e97ae3180a93c37bd82.png",
                "https://s3-ap-northeast-1.amazonaws.com/tahoe-dev/places/1466654/menus/1466654_60001_1459388413343.jpg"
              ],
              like: restaurant.likes.length
            });
          });

          this.setState({
            cardData
          });
        });
    }
  }

  render() {
    const { tags, blur, isOpened, onCardClick, onCloseClick } = this.props;

    const { cardData } = this.state;

    return (
      <CardList
        tags={tags}
        data={cardData}
        blur={blur}
        isOpened={isOpened}
        onCardClick={onCardClick}
        onCloseClick={onCloseClick}
      />
    );
  }
}

export default CardListContainer;
