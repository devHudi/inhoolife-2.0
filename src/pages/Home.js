import React, { Component, Fragment } from "react";
import { TagSelector, CardList, DetailRestaurantCard } from "../components";
import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardListData: [
        {
          title: "우선소곱창",
          tags: ["곱창"],
          images: [
            "http://img.daily.co.kr/@files/www.daily.co.kr/content/food/2017/20170901/3b03901da9770e97ae3180a93c37bd82.png",
            "https://s3-ap-northeast-1.amazonaws.com/tahoe-dev/places/1466654/menus/1466654_60001_1459388413343.jpg"
          ],
          like: 0
        },
        {
          title: "찌개사랑",
          tags: ["찌개"],
          images: [
            "http://img.daily.co.kr/@files/www.daily.co.kr/content/food/2017/20170901/3b03901da9770e97ae3180a93c37bd82.png",
            "https://s3-ap-northeast-1.amazonaws.com/tahoe-dev/places/1466654/menus/1466654_60001_1459388413343.jpg"
          ],
          like: 0
        },
        {
          title: "킹콩순두부",
          tags: ["찌개"],
          images: [
            "http://img.daily.co.kr/@files/www.daily.co.kr/content/food/2017/20170901/3b03901da9770e97ae3180a93c37bd82.png",
            "https://s3-ap-northeast-1.amazonaws.com/tahoe-dev/places/1466654/menus/1466654_60001_1459388413343.jpg"
          ],
          like: 0
        }
      ],
      detailData: {
        title: "",
        tags: [],
        like: 0,
        comments: [{ author: "" }]
      },
      isCardListOpened: false,
      isDetailRestaurantCardOpened: false
    };
  }

  handleOpenCardList = () => {
    this.setState({
      isCardListOpened: true
    });
  };

  handleCloseCardList = () => {
    this.setState({
      isCardListOpened: false
    });
  };

  handleOpenDetail = () => {
    this.setState({
      isDetailRestaurantCardOpened: true
    });
  };

  handleCloseDetail = () => {
    this.setState({
      isDetailRestaurantCardOpened: false
    });
  };

  render() {
    const {
      cardListData,
      isCardListOpened,
      isDetailRestaurantCardOpened
    } = this.state;

    return (
      <Fragment>
        <Button onClick={this.handleOpenCardList}> 열려라 </Button>
        <TagSelector blur={isCardListOpened} scrollable={!isCardListOpened} />
        <CardList
          tags={["곱창", "찌개"]}
          data={cardListData}
          blur={isDetailRestaurantCardOpened}
          onCardClick={this.handleOpenDetail}
          onCloseClick={this.handleCloseCardList}
          isOpened={isCardListOpened}
        />

        <DetailRestaurantCard
          title="이거슨타이틀"
          tags={["곱창", "찌개"]}
          like={3}
          images={[
            "http://mblogthumb3.phinf.naver.net/MjAxNzA0MTJfMjk0/MDAxNDkxOTY4NDYzODU0.dHO7OhiHVY3o_ACpr99iXkarVbe9iYW3mwScYDJGPxwg.UvffeLc02hHW7ltpDNZKpBOJDjgLnnAGzXZKyJ5rRn0g.JPEG.seulgi_0506/%EC%9A%B0%EC%84%A0%EC%86%8C%EA%B3%B1%EC%B0%BD.JPG?type=w800",
            "http://cfile9.uf.tistory.com/image/2506A53858F4228C095018",
            "http://mblogthumb4.phinf.naver.net/MjAxNzA0MTBfMTAx/MDAxNDkxODMwNTMyMTQ5.UbYWcE-xaDEcEeQ4YPCyBA-Iz5Ai4GHtltbqZhySSuYg.aJy-snH4_06caRod5WLhuG4Evlx1RTpg8jzbKRw_rXog.JPEG.eeeun29/%EA%B3%B1%EC%B0%BD%EB%B3%B6%EC%9D%8C%EB%B0%A5.jpg?type=w800",
            "http://mblogthumb4.phinf.naver.net/MjAxNzA0MTBfMTc2/MDAxNDkxODMwNzcwOTI4.OAIWc8TKpYTPR1jSSl9VHeJJPvW18ub0lb3ttoCKoHUg.NOAfo8RBNr8VnXfMF5NMG8x-PJwSwEF2B14upUduqWEg.JPEG.eeeun29/%EC%9D%B8%ED%95%98%EB%8C%80%ED%9B%84%EB%AC%B8%EB%A7%9B%EC%A7%91.jpg?type=w800",
            "https://t1.daumcdn.net/cfile/tistory/2619503358F4231909"
          ]}
          isOpened={isDetailRestaurantCardOpened}
          onCloseClick={this.handleCloseDetail}
        />
      </Fragment>
    );
  }
}

const Button = styled.button`
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1001;
  font-size: 20pt;
  background-color: #ffffff;
`;

export default Home;
