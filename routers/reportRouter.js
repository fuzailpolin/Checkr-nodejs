const reportRouter = require("express").Router();
const reportsController = require("../controllers/reports/reportsController");

reportRouter.get("/:id", reportsController.getOne);

//All reports

reportRouter.get(
  "/national-criminal-searches-report/:id",
  reportsController.getNationalCiriminalSearchReport
);
reportRouter.get("/ssn-traces-report/:id", reportsController.getSSNTraceReport);
reportRouter.get(
  "/sex-offender-searches-report/:id",
  reportsController.getSexOffenderSearchReport
);
reportRouter.get(
  "/global-watchlist-search-report/:id",
  reportsController.getGlobalWatchlistReport
);

module.exports = reportRouter;
