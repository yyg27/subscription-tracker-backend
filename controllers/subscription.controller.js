import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({ succes: true, data: subscription }); //if the user is authorized we validated the request
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    //checks if the user ID in the request is the same as the user ID in the token
    if(req.user._id !== req.params.id) {
      return res.status(401).json({ success: false, message: "Unauthorized!! User's don't match" });
    }
    //find all subscriptions that belong to the user's ID
    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};
