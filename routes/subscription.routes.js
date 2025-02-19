import { Router } from "express";

const subscriptionRouter = Router();
subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subs    " })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get by id   " })
);
subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "create a sub    " })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "update a sub    " })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete a sub    " })
);
subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "get all user subs   " })
);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel  user subs   " })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "get renewals   " })
);

export default subscriptionRouter;
