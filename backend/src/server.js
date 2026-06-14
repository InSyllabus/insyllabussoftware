require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

const whitelist = [
  "http://localhost:5173",
  "https://insyllabussoftware.com",
  "https://www.insyllabussoftware.com",
];

app.use(
  cors({
    credentials: true,
    origin(origin, callback) {
      if (!origin || whitelist.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/career", require("./routes/careerRoutes"));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: "Internal server error",
  });
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Closing server...");
  await require("mongoose").connection.close();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing server...");
  await require("mongoose").connection.close();
  process.exit(0);
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
