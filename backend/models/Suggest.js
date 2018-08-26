import mongoose, { Schema } from "mongoose";

const suggestSchema = new Schema({
  name: String,
  isConfirmed: Boolean,
  isCreated: Date
});

suggestSchema.statics.add = function(name) {
  const suggest = new this({
    name,
    isConfirmed: false,
    isCreated: new Date()
  });

  return suggest.save();
};

export default mongoose.model("Suggest", suggestSchema);
