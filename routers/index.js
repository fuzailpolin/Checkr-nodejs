const router = require("express").Router();
const accountRouter = require("./accountRouter");
const candidateRouter = require("./candidateRouter");
const reportRouter = require("./reportRouter");

router.use("/accounts", accountRouter);
router.use("/candidates", candidateRouter);
router.use("/reports", reportRouter);

module.exports = router;
