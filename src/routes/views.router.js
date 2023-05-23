import { Router } from "express";
import userModel from "../dao/models/User.js";
import petModel from "../dao/models/Pet.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
  });
});

router.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.render("users", {
    title: "Users",
    users,
  });
});

router.get("/pets", async (req, res) => {
  const pets = await petModel.find();
  res.render("pets", {
    title: "Pets",
    pets,
  });
});

export default router;
