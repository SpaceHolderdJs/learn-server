import { Router } from "express";
import Project from "../mongo/schemas/project.schema";

const projectRouter = Router();

projectRouter.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).send({ projects });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

projectRouter.post("/", async (req, res) => {
  try {
    const { name, duration, users } = req.body;
    const project = new Project({ name, duration, users });
    await project.save();

    res.status(200).send(project);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default projectRouter;