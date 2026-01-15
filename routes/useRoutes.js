import { Router } from "express";
import {
  getUsers,
  showNewForm,
  createUser,
  deleteUsernames,
} from "../controllers/useControllers.js";

const router = Router();

router.get("/", getUsers);

// GET /new
router.get("/new", showNewForm);

// POST /new
router.post("/new", createUser);

router.delete("/delete", deleteUsernames);

export default router;
