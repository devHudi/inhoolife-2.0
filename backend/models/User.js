import mongoose, { Schema } from "mongoose";
import crypto from "crypto";
import { generateToken } from "../lib/token";

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const userSchema = new Schema({
  id: String,
  nickname: String,
  password: String,
  like_restaurants: [String],
  isCreatedAt: Date
});

userSchema.statics.localRegister = function(id, nickname, password) {
  const user = new this({
    id,
    nickname,
    password: crypto
      .createHmac("sha256", SECRET_KEY)
      .update(password)
      .digest("hex"),
    like_restaurants: [],
    isCreatedAt: new Date()
  });

  return user.save();
};

userSchema.statics.findOneById = function(id) {
  return this.findOne({ id });
};

userSchema.methods.addLikeRestaurant = function(id) {
  this.like_restaurants.push(id);
  this.save();
};

userSchema.methods.removeLikeRestaurant = function(id) {
  this.like_restaurants.pull(id);
  this.save();
};

userSchema.methods.verify = function(password) {
  const hashedPassword = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(password)
    .digest("hex");
  return this.password === hashedPassword;
};

userSchema.methods.generateToken = function() {
  const payload = {
    _id: this._id,
    id: this.id
  };

  return generateToken(payload, "user");
};

export default mongoose.model("User", userSchema);
