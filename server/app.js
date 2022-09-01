const express = require("express");
const app = express();
const productsRouter = require("./router/productRoutes");
const reviewRoutes = require("./router/reviewsRouter");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const port = process.env.PORT || 1000;
const mongoose = require("mongoose");
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Couldn't connect to db");
    } else {
      console.log("Db connected successfully");
    }
  }
);

app.use(productsRouter);
app.use(reviewRoutes);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
