import Restaurant from "../models/Restaurant";
import Tag from "../models/Tag";
import User from "../models/User";
import { verifyToken } from "../lib/token";

const resolvers = {
  Query: {
    restaurants: (_, { tags }) => {
      if (tags) return Restaurant.findByTags(tags);
      else return Restaurant.find();
    },
    restaurant: (_, { id }) => Restaurant.findById(id),
    majorTags: () => Tag.findByType("major"),
    minorTags: () => Tag.findByType("minor"),
    user: (_, { id }) => User.findOneById(id),
    login: (_, { id, password }) => {
      return new Promise((resolve, reject) => {
        User.findOneById(id).then(user => {
          if (!user) reject("user dose not exists");
          if (user.verify(password)) {
            user.generateToken().then(token => resolve(token));
          } else {
            reject("invalid password");
          }
        });
      });
    },
    verifyToken: (_, { token }) => {
      return new Promise((resolve, reject) => {
        verifyToken(token).then(decoded => {
          resolve(decoded.id);
        });
      });
    }
  },
  Mutation: {
    addRestaurant: (_, { name, address, menu, tags }) =>
      Restaurant.add(name, address, menu, tags),
    addTag: (_, { name, type }) => Tag.add(name, type),
    removeTag: (_, { name }) => Tag.remove(name),
    writeCommentToRestaurant: (_, { restaurant_id, user_id, body }) => {
      return new Promise((resolve, reject) => {
        Restaurant.findById(restaurant_id).then(restaurant => {
          User.findOneById(user_id).then(user => {
            restaurant.addComment(user_id, user.nickname, body);
            resolve({
              user_id,
              nickname: user.nickname,
              body
            });
          });
        });
      });
    },
    localRegister: (_, { id, nickname, password }) => {
      return new Promise((resolve, reject) => {
        User.findOneById(id).then(user => {
          if (user) reject("user exists");
          resolve(User.localRegister(id, nickname, password));
        });
      });
    }
  }
};

export default resolvers;
