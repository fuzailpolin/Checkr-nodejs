const accountRouter = require("express").Router();
const accountController = require("../controllers/account/accountController");

accountRouter.get("/info", accountController.getAccountInfo);
accountRouter.get("/packages", accountController.getAccountPackages);

module.exports = accountRouter;
