import mongoose, { Schema } from "mongoose";
import Tag from "./Tag";

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
  return this.find({ tags: { $in: tags } });
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
