import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
} from "../controller/auth.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth route");
});

router.post("/signup", signup);

router.post("/verify-email", verifyEmail);

router.post("/login", login);

router.post("/logout", logout);

export default router;
