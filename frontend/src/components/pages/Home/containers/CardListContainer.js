import React, { Component } from "react";
import client from "../../../../apollo/client";
import { RESTAURANTS_WITH_TAGS } from "../../../../apollo/queries";
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

    const query = RESTAURANTS_WITH_TAGS(tags);

    if (isOpened) {
      client
        .query({
          query,
          fetchPolicy: "network-only"
        })
        .then(result => {
          const cardData = [];

          let data = result.data.restaurantsByTags;
          if (data.length > 10) data = data.slice(0, 10);

          data.map(restaurant =>
            cardData.push({
              id: restaurant.id,
              title: restaurant.name,
              tags: restaurant.tags,
              like: restaurant.likes.length
            })
          );

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
