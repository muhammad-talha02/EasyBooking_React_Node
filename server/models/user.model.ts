import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  comparePassword: (password: string) => Boolean;
}
const userSchema: Schema<UserInterface> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true
  },
);

// Encypt password

userSchema.pre<UserInterface>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("Users", userSchema);

export default User;
