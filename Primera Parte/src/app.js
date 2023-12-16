import path from "node:path";
import express from "express";
import userRouter from "./routers/users.routers.js";
import petsRouter from "./routers/pets.routers.js";
import __dirname from "./utils.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);

app.listen(PORT, () => {
  console.log("Listening on port 8080");
});
