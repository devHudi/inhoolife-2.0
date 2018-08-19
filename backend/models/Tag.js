import mongoose, { Schema } from "mongoose";

const tagSchema = new Schema({
  name: String,
  type: String
});

tagSchema.statics.findByName = function(name) {
  return this.find({ name });
};

tagSchema.statics.findByType = function(type) {
  return this.find({ type });
};

tagSchema.statics.clearAndUpdate = function(tags, type) {
  this.remove({ type: type }, (error, output) => {
    const tagDocs = tags.map((tag, i) => {
      return {
        name: tag,
        type
      };
    });

    this.collection.insert(tagDocs);
  });
};

tagSchema.statics.add = function(name, type) {
  const tag = new this({
    name,
    type
  });

  return tag.save();
};

export default mongoose.model("Tag", tagSchema);
