import gql from "graphql-tag";

export const RESTAURANT_LIST = gql`
  query {
    restaurants {
      id
      name
    }
  }
`;

export const RESTAURANTS_WITH_TAGS = tags => {
  let tagsString = "[";
  tags.map(tag => {
    tagsString += `"${tag}",`;
  });
  tagsString += `]`;

  return gql`
    query {
      restaurantsByTags(tags: ${tagsString}) {
        id
        name
        tags
        likes
      }
    }
  `;
};

export const RESTAURANT = id => gql`
  query {
    restaurant(id: "${id}") {
      id
      name
      tags
      menu {
        name
        price
      }
      likes 
      comments {
        user_id
        nickname
        body
      }
      tags
    }
  }
`;

export const RESTAURANT_HEADER = id => gql`
  query {
    restaurant(id: "${id}") {
      id
      name
      tags
    }
  }
`;

export const RESTAURANT_MENU = id => gql`
  query {
    restaurant(id: "${id}") {
      id
      menu {
        name
        price
      }
    }
  }
`;

export const RESTAURANT_COMMENTS = id => gql`
  query {
    restaurant(id: "${id}") {
      id
      comments {
        nickname
        body
        isCreatedAt
      }
    }
  }
`;

export const RESTAURANT_ADDRESS = id => gql`
  query {
    restaurant(id: "${id}") {
      id
      address
    }
  }
`;

export const RESTAURANT_LIKE = (id, restaurant_id) => gql`
  query {
    restaurant(id: "${restaurant_id}") {
      id
      likes
    }
    user(id: "${id}") {
      id
      like_restaurants
    }
  }
`;

export const USER_LIKES = id => gql`
  query {
    user(id: "${id}") {
      id
      like_restaurants
    }
  }
`;

export const MAJOR_TAGS = gql`
  query {
    majorTags {
      name
    }
  }
`;

export const MINOR_TAGS = gql`
  query {
    minorTags {
      name
    }
  }
`;

export const LOGIN = (id, password) => gql`
  query {
    login(id: "${id}", password: "${password}")
  }
`;

export const REGISTER = (id, nickname, password) => gql`
  mutation {
    localRegister(id: "${id}", nickname: "${nickname}", password: "${password}") {
      id
    }
  }
`;

export const VERIFY_TOKEN = token => gql`
  query {
    verifyToken(token: "${token}")
  }
`;

export const WRITE_COMMENT_TO_RESTAURANT = (restaurant_id, id, body) => gql`
  mutation {
    writeCommentToRestaurant(
      restaurant_id: "${restaurant_id}"
      user_id: "${id}"
      body: "${body}"
    ) {
      user_id
      nickname
      body
    }
  }
`;

export const LIKE_RESTAURANTS = id => gql`
  query {
    user(id: "${id}") {
      like_restaurants
    }
  }
`;

export const ADD_LIKE_RESTAURANT = (id, restaurant_id) => gql`
  mutation {
    addLikeRestaurant(
      id: "${id}",
      restaurant_id: "${restaurant_id}"
    )
  }
`;

export const REMOVE_LIKE_RESTAURANT = (id, restaurant_id) => gql`
  mutation {
    removeLikeRestaurant(
      id: "${id}",
      restaurant_id: "${restaurant_id}"
    )
  }
`;

export const SUGGEST = text => gql`
  mutation {
    suggest(
      text: "${text}"
    )
  }
`;
