const express = require("express");
const router = express.Router();
const portfolioCtrl = require("../controllers/porfolio");
const authService = require("../services/auth");

//CREATE NEW PORTFOLIO
router.post(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.savePortfolio
);

//GET PORTFOLIOS
router.get(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.getPortfolios
);

//UPDATE PORTFOLIOS
router.patch(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.updatePortfolio
);

//DELETE PORTFOLIOS
router.delete(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.deletePortfolio
);

module.exports = router;
