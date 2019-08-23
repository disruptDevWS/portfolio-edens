const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/blog");
const authService = require("../services/auth");

//RETRIEVE PUBLISHED BLOGS
router.get("", blogCtrl.getBlogs);

//BLOG DASHBOARD ACCESS
router.get(
  "/me",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogCtrl.getUserBlogs
);

//GET BLOG BY ID
router.get("/:id", blogCtrl.getBlogById);

//GET BLOG BY SLUG
router.get("/s/:slug", blogCtrl.getBlogBySlug);

//CREATE NEW BLOG
router.post(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogCtrl.createBlog
);

//UPDATE BLOG
router.patch(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogCtrl.updateBlog
);

//DELETE BLOG
router.delete(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogCtrl.deleteBlog
);

module.exports = router;
