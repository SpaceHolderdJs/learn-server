import { Router } from "express";
import User from "../mongo/schemas/user.schema.js";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users });
  } catch (e) {
    console.log("error", e);
    res.sendStatus(500);
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { name, age, location, skills, salary } = req.body;
    const user = new User({ name, age, location, skills, salary });
    await user.save();

    res.status(200).send(user);
  } catch (e) {
    console.log("error", e);
    res.sendStatus(500);
  }
});

usersRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
   
    await User.findByIdAndUpdate(id, {...req.body});

    const user = await User.findById(id);

    res.status(200).send(user);
  } catch (e) {
    console.log("error", e);
    res.sendStatus(500);
  }
});

usersRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(204).send({ id, deleted: true });
  } catch (e) {
    console.log("error", e);
    res.sendStatus(500);
  }
});

export default usersRouter;
