const candidateRouter = require("express").Router();
const candidateController = require("../controllers/candidates/candidatesController");

candidateRouter.get("/:id", candidateController.getOne);
candidateRouter.post("/create", candidateController.create);
candidateRouter.post("/send-invitation", candidateController.sendInvitation);

module.exports = candidateRouter;
