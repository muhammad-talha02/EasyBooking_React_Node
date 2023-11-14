import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    hotelId: {
      type: String,
    },
    roomNumber: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
