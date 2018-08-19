import fs from "fs";
import request from "request";
import Restaurant from "../models/Restaurant";
import Tag from "../models/Tag";
import User from "../models/User";
import { verifyToken } from "../lib/token";

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    request.head(url, function(err, res, body) {
      request(url)
        .pipe(fs.createWriteStream(`./public/images/${filename}.jpg`))
        .on("close", () => {
          resolve();
        });
    });
  });
}

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
    addRestaurant: (_, { name, address, menu, tags, url }) => {
      return new Promise((resolve, reject) => {
        Restaurant.add(name, address, menu, tags).then(restaurant => {
          const imageFilename = restaurant._id;
          downloadImage(url, imageFilename).then(() => {
            resolve(restaurant);
          });
        });
      });
    },
    updateRestaurant: (_, { id, name, address, menu, tags, url }) => {
      return new Promise((resolve, reject) => {
        Restaurant.findById(id).then(restaurant => {
          restaurant.update(name, address, menu, tags);
          if (url) {
            downloadImage(url, id).then(() => {
              resolve(restaurant);
            });
          } else resolve(restaurant);
        });
      });
    },
    removeRestaurant: (_, { id }) => Restaurant.removeById(id),
    addTag: (_, { name, type }) => Tag.add(name, type),
    removeTag: (_, { name }) => Tag.remove(name),
    saveTags: (_, { tags, type }) => {
      return new Promise((resolve, reject) => {
        Tag.clearAndUpdate(tags, type);
        resolve(tags);
      });
    },
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
    },
    addLikeRestaurant: (_, { id, restaurant_id }) => {
      return new Promise((resolve, reject) => {
        User.findOneById(id).then(user => {
          const exist = user.like_restaurants.indexOf(restaurant_id) !== -1;
          if (!exist) {
            user.addLikeRestaurant(restaurant_id);
            Restaurant.findById(restaurant_id).then(restaurant => {
              restaurant.addLikeUser(id);
            });

            resolve(user.like_restaurants);
          } else {
            reject("exist restaurant");
          }
        });
      });
    },
    removeLikeRestaurant: (_, { id, restaurant_id }) => {
      return new Promise((resolve, reject) => {
        User.findOneById(id).then(user => {
          const exist = user.like_restaurants.indexOf(restaurant_id) !== -1;
          if (exist) {
            user.removeLikeRestaurant(restaurant_id);
            Restaurant.findById(restaurant_id).then(restaurant => {
              restaurant.removeLikeUser(id);
            });

            resolve(user.like_restaurants);
          } else {
            reject("not exist restaurant");
          }
        });
      });
    }
  }
};

export default resolvers;
