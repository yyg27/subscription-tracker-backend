import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // to find ALL the users in the database

    res.status(200).json({ succes: true, data: users });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res) => {
  try {
    // to find a specific user in the database
    const user = await User.findById(req.params.id).select("-password"); //.select(-password) to exclude the password from the response

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ succes: true, data: user });
  } catch (error) {
    next(error);
  }
};
