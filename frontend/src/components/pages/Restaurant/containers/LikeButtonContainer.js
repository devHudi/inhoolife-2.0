import React, { Component, Fragment } from "react";
import client from "../../../../apollo/client";
import {
  VERIFY_TOKEN,
  RESTAURANT_LIKE,
  ADD_LIKE_RESTAURANT,
  REMOVE_LIKE_RESTAURANT
} from "../../../../apollo/queries";
import { LikeButton } from "../components";

class LikeButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
      likes: 0
    };
  }

  handleToggle = () => {
    const { isLiked } = this.state;
    const token = localStorage.jwt;

    if (token) {
      if (isLiked) {
        this.removeLikeRestaurant();
      } else {
        this.addLikeRestaurant();
      }
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  verifyToken = () => {
    const token = localStorage.jwt;

    return new Promise((resolve, reject) => {
      client
        .query({
          query: VERIFY_TOKEN(token),
          fetchPolicy: "network-only"
        })
        .then(result => {
          const id = result.data.verifyToken;
          resolve(id);
        });
    });
  };

  addLikeRestaurant = () => {
    const { restaurantId } = this.props;

    this.verifyToken().then(id => {
      const mutation = ADD_LIKE_RESTAURANT(id, restaurantId);
      client.mutate({ mutation }).then(result => {
        this.setState({
          isLiked: true,
          likes: ++this.state.likes
        });
      });
    });
  };

  removeLikeRestaurant = () => {
    const { restaurantId } = this.props;

    this.verifyToken().then(id => {
      const mutation = REMOVE_LIKE_RESTAURANT(id, restaurantId);
      client.mutate({ mutation }).then(result => {
        this.setState({
          isLiked: false,
          likes: --this.state.likes
        });
      });
    });
  };

  renderLike = id => {
    const { restaurantId } = this.props;

    client
      .query({
        query: RESTAURANT_LIKE(id, restaurantId),
        fetchPolicy: "network-only"
      })
      .then(({ error, loading, data }) => {
        const like_users = data.restaurant.likes;
        const isLiked = like_users.indexOf(id) !== -1;

        this.setState({
          isLiked,
          likes: like_users.length
        });
      });
  };

  componentDidMount() {
    const { restaurantId } = this.props;
    const token = localStorage.jwt;
    let id = null;

    this.verifyToken().then(id => {
      this.renderLike(id);
    });
  }

  render() {
    const { isLiked, likes } = this.state;

    return (
      <Fragment>
        <LikeButton
          isLiked={isLiked}
          likes={likes}
          onClick={this.handleToggle}
        />
      </Fragment>
    );
  }

  //TODO: 좋아한 식당 리스트를 들어가고, 다시 해당 식당을 클릭해 들어가면 좋아요 클릭여부와 숫자가 표시되지 않음
}

export default LikeButtonContainer;
