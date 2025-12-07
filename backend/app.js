const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

require("./db/connection")
const ratingRouter = require("./routes/ratingRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", ratingRouter);

const PORT = process.env.port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
