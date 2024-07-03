const express = require("express");
// const cors = require("cors");
const config = require("./configs/app");
const logger = require("./configs/logger");
const app = express();

// CORS
// app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  // You can specify specific origins instead of '*' if needed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Connect database
require("./configs/databases");

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport
require("./configs/passport");

// Custom Response Format
app.use(require("./configs/responseFormat"));

// Middleware
require("./configs/middleware");

// Routes
app.use(require("./routes"));

// Error handler
require("./configs/errorHandler")(config.isProduction, app);

// Start Server
const server = app
  // .listen(config.port, "127.0.0.1", () => {
  // .listen(config.port, "192.168.0.106", () => {
  // .listen(config.port, "192.168.0.100", () => {
  .listen(config.port, "192.168.0.113", () => {
    // .listen(config.port, "192.168.1.122", () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Server is running on http://${host}:${port}`);
  })
  .on("error", function (err) {
    logger.error("[start server error]:");
    logger.error(JSON.stringify(err));
  });
