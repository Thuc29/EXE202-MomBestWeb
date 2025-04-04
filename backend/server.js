const express = require("express");
const connectDB = require("./config/db");
const router = require("./src/routers/index");
const app = express();

connectDB();
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
