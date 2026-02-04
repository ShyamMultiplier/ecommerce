require("dotenv").config();
const connectDB = require("../config/db");
connectDB();

const categoryData = require("./categories");
const productData = require("./products");
const reviewData = require("./reviews");
const userData = require("./users");
const orderData = require("./orders");

const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");
const Review = require("../models/ReviewModel");
const User = require("../models/UserModel");
const Order = require("../models/OrderModel");

const importData = async () => {
  try {
    // Drop existing indexes to avoid conflicts with new category structures
    await Category.collection.dropIndexes();
    await Product.collection.dropIndexes();

    // Clear all existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});
    await Order.deleteMany({});

    if (process.argv[2] !== "-d") {
      await Category.insertMany(categoryData);
      const reviews = await Review.insertMany(reviewData);

      // Assign a random review from the review pool to each product
      const sampleProducts = productData.map((product) => {
        const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
        product.reviews = [randomReview._id];
        product.rating = randomReview.rating;
        product.reviewsNumber = 1;
        return { ...product };
      });

      await Product.insertMany(sampleProducts);
      await User.insertMany(userData);
      await Order.insertMany(orderData);

      console.log("Database reset with 50 student products successfully.");
      process.exit();
    }
    console.log("Database cleared successfully.");
    process.exit();
  } catch (error) {
    console.error("Error processing seeder data:", error);
    process.exit(1);
  }
};

importData();