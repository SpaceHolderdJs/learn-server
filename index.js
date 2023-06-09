import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.route.js";
import connectMongoDb from "./mongo/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import projectRouter from "./routes/projects.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 7777;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use("/users", usersRouter);
app.use("/projects", projectRouter);

app.listen(PORT, () => {
  console.log("App is working on port ", PORT);
  connectMongoDb();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
