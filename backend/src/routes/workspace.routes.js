import express from "express";
import {
createWorkspace,
getWorkspaces,
updateWorkspace,
deleteWorkspace
} from "../controllers/workspace.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createWorkspace);

router.get("/", protect, getWorkspaces);

router.put("/:id", protect, updateWorkspace);

router.delete("/:id", protect, deleteWorkspace);

export default router;