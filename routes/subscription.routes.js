import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (reg, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRouter.get("/:id", (reg, res) =>
  res.send({ title: "GET subscription details" })
);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (reg, res) =>
  res.send({ title: "UPDATE subscription" })
);

subscriptionRouter.delete("/:id", (reg, res) =>
  res.send({ title: "DELETE subscription" })
);

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
//TODO: "message": "Unauthorized!! User's don't match" ERROR. FIX LATER 

subscriptionRouter.put("/:id/cancel", (reg, res) =>
  res.send({ title: "CANCEL subscription" })
);

subscriptionRouter.get("/upcoming-renewals", (reg, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptionRouter;
