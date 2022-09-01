const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ProductSchema = schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: {
      createdAt: "cDate",
      updatedAt: "uDate",
    },
  }
);
const Products = mongoose.model("Products", ProductSchema);
const reviewSchema = schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  uid: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});
const ReviewSchema = mongoose.model("Reviews", reviewSchema);
module.exports = {
  Products,
  ReviewSchema,
};
