import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./src/config/db.js";
//import { connectRedis } from "./src/config/redis.js";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();

/* Connect Database */
connectDB();

/* Connect Redis */
//connectRedis();

/* Middleware */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/* Routes */
app.get("/", (req, res) => {
  res.send("LifeOS Backend Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use("/api", routes);