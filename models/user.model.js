import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "User Email is required"],
      trim: true,
      uniqe: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email adress"], //REGEX for email validation
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema);

export default User;

// SCHEMA will look like this:
// {
// name: "Dean Winchester", 
// mail: "impala1967@gmail.com", 
// password: "CarryonWaywardSon1967"
// }