const mongoose = require("mongoose");

require("dotenv").config();

const datastring = process.env.databseURL;

mongoose.connect(datastring);

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

const BankSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", BankSchema);

module.exports = {
  User,
  Account,
};
