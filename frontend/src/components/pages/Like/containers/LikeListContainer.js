import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import client from "../../../../apollo/client";
import {
  VERIFY_TOKEN,
  USER_LIKES,
  RESTAURANT
} from "../../../../apollo/queries";
import { List } from "../../../commons";

class LikeListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: []
    };
  }

  verifyToken = () => {
    const token = localStorage.jwt;

    return new Promise((resolve, reject) => {
      client
        .query({
          query: VERIFY_TOKEN(token)
        })
        .then(result => {
          const id = result.data.verifyToken;
          resolve(id);
        });
    });
  };

  fetchLikeList = id => {
    client
      .query({ query: USER_LIKES(id), fetchPolicy: "network-only" }) //캐싱된 데이터 가져오지 않게
      .then(({ error, loading, data }) => {
        //좋아하는 식당 ID 추출
        const likeRestaurants = data.user.like_restaurants;
        const restaurants = [];

        likeRestaurants.map((restaurant, i) => {
          //좋아하는 식당 이름 추출
          client
            .query({ query: RESTAURANT(restaurant) })
            .then(({ error, loading, data }) => {
              this.setState({
                restaurants: [
                  ...this.state.restaurants,
                  { id: restaurant, name: data.restaurant.name }
                ]
              });
            });
        });
      });
  };

  componentDidMount() {
    const token = localStorage.jwt;

    if (token) {
      this.verifyToken().then(id => {
        this.fetchLikeList(id);
      });
    } else {
      alert("로그인이 필요합니다.");
    }
  }

  componentWillUnmount() {}

  render() {
    const { restaurants } = this.state;

    return (
      <List>
        {restaurants.map((restaurant, i) => {
          return (
            <Link to={`/restaurant/${restaurant.id}`} key={i}>
              <List.Item> {restaurant.name} </List.Item>
            </Link>
          );
        })}
      </List>
    );
  }
}

export default LikeListContainer;
