const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    //unique: độc nhất, trim: bỏ space
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Name must be require"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email must be require"],
    },
    password: {
      type: String,
      unique: true,
      required: [true, "Password must be require"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    avatar: { type: String },
    cloudinary_id: { type: String },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (error, hash) {
    if (error) {
      return next(error);
    } else {
      user.password = hash;
      next();
    }
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
