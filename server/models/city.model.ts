import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["Dubai", "Abu Dhabi", "Sharjah"],
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    properties: {
      type: [String],
    },
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        // return ret.id;
      },
    },
  }
);

const City = mongoose.model("Cities", citySchema);

export default City;
