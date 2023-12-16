import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routers/views.router.js";

const port = 8080;
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", viewsRouter);

// app.get("/", (req, res) => {
//   const random = Math.floor(Math.random() * users.length);
//   res.render("index", { user: users[random], isAdmin: users[random].role === "admin", food });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
