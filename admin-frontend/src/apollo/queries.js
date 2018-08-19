import gql from "graphql-tag";

export const RESTAURANT_LIST = gql`
  query {
    restaurants {
      id
      name
    }
  }
`;

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
      address
    }
  }
`;

export const ADD_RESTAURANT = (name, address, tags, menu, url) => gql`
  mutation {
    addRestaurant(
      name: "${name}"
      address: "${address}"
      menu: ${menu}
      tags: ${tags}
      url: "${url}"
    ) {
      id
      name
      address
      tags
      menu {
        name
        price
      }
    }
  }
`;

export const UPDATE_RESTAURANT = (id, name, address, tags, menu, url) => gql`
  mutation {
    updateRestaurant(
      id: "${id}"
      name: "${name}"
      address: "${address}"
      menu: ${menu}
      tags: ${tags}
      url: "${url}"
    ) {
      id
      name
      address
      tags
      menu {
        name
        price
      }
    }
  }
`;

export const REMOVE_RESTAURANT = id => gql`
  mutation {
    removeRestaurant(
      id: "${id}"
    ) {
      id
      name
    }
  }
`;

export const SAVE_TAGS = (tags, type) => gql`
  mutation {
    saveTags(
      tags: ${tags}
      type: "${type}"
    ) 
  }
`;

export const ADD_TAG = (name, type) => gql`
  mutation {
    addTag(
      name: ${name}
      type: ${type}
    ) {
      name
      type
    }
  }
`;

export const REMOVE_TAG = name => gql`
  mutation {
    addTag(
      name: ${name}
    ) {
      name
      type
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
