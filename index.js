import express, { urlencoded } from "express";
import { UsersRouter } from "./routes/index.js";
import usersRouter from "./routes/users.route.js";
import connectMongoDb from "./mongo/index.js";

const PORT = 7777;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


app.use("/users", usersRouter);

app.listen(PORT, () => {
    console.log("App is working on port ", PORT);
    connectMongoDb();
});

app.get("/", (req, res) => {
    res.send({msg: "Hello"})
});