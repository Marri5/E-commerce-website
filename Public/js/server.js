const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("../routes/auth");
const protectedRoutes = require("../routes/protected");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(error => console.error("MongoDB connection error:", error));

app.use("/api/auth", authRoutes);         
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
