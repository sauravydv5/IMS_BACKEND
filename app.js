const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
const router = require("./src/Routers/routes");
const app = express();

//Middleware

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://imsmanag.netlify.app"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

// Start server after DB connection
connectDB()
  .then(() => {
    console.log("✅ Database Connection Established!");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
