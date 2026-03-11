import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./src/config/db.js";
// import { connectRedis } from "./src/config/redis.js";
import routes from "./src/routes/index.js";
import authRoutes from "./src/routes/auth.routes.js";
import workspaceRoutes from "./src/routes/workspace.routes.js";

dotenv.config();

const app = express();

connectDB();
// connectRedis();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("LifeOS Backend Running");
});


app.use("/api", routes);



/* Authentication routes mount */
app.use("/api/auth", authRoutes);


/* workspace routes mount */
app.use("/api/workspaces", workspaceRoutes);

export default app;

