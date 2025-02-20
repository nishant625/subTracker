import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscriptions.controller.js";

const subscriptionRouter = Router();
subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subs    " })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get by id   " })
);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "update a sub    " })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete a sub    " })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel  user subs   " })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "get renewals   " })
);

export default subscriptionRouter;
