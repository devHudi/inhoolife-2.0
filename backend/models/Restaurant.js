import mongoose, { Schema } from "mongoose";
import Tag from "./Tag";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const menuSchema = new Schema({
  name: String,
  price: Number
});

const commentSchema = new Schema({
  id: String,
  nickname: String,
  body: String,
  isCreatedAt: Date
});

const restaurantSchema = new Schema({
  name: String,
  address: String,
  menu: [menuSchema],
  likes: [String],
  comments: [commentSchema],
  tags: [String]
});

restaurantSchema.statics.findByTags = function(tags) {
  return new Promise((resolve, reject) => {
    if (tags.length > 0) {
      this.find({ tags: { $in: tags } }).then(restaurants => {
        resolve(shuffle(restaurants));
      });
    } else {
      this.find({}).then(restaurants => {
        resolve(shuffle(restaurants));
      });
    }
  });
};

restaurantSchema.statics.add = function(name, address, menu, tags) {
  const restaurant = new this({
    name,
    address,
    menu,
    tags,
    likes: [],
    comments: []
  });

  return restaurant.save();
};

restaurantSchema.methods.update = function(name, address, menu, tags) {
  this.name = name;
  this.address = address;
  this.menu = menu;
  this.tags = tags;

  this.save();
};

restaurantSchema.statics.removeById = function(id) {
  return new Promise((resolve, reject) => {
    this.findByIdAndRemove(id, (err, doc) => resolve(doc));
  });
};

restaurantSchema.methods.addComment = function(id, nickname, body) {
  this.comments.push({
    id,
    nickname,
    body,
    isCreatedAt: new Date()
  });

  this.save();
};

restaurantSchema.methods.addLikeUser = function(id) {
  this.likes.push(id);
  this.save();
};

restaurantSchema.methods.removeLikeUser = function(id) {
  this.likes.pull(id);
  this.save();
};

export default mongoose.model("Restaurant", restaurantSchema);
