const express = require("express");
const reviewRoutes = express();
const {
  addReviews,
  deletereviews,
  populatereviews,
} = require("../controller/reviews");
reviewRoutes.post("/addReview", addReviews);
reviewRoutes.delete("/deletereviews", deletereviews);
reviewRoutes.get("/populate", populatereviews);
module.exports = reviewRoutes;
