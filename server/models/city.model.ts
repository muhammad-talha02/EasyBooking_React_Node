import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
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
});

const City = mongoose.model("Cities", citySchema);

export default City
