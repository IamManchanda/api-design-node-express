import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";

export const app = express();
const apiRoutes = express.Router();
const catRoutes = express.Router();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

catRoutes.route("/cat").get().post();
catRoutes.route("/cat:id").get().put().post();
app.use("/api", catRoutes);

apiRoutes.get("/me", (req, res) => {
  res.send({
    message: "Hello, This is Harry",
  });
});

app.use("/api", apiRoutes);

app.get("/data", (req, res) => {
  res.send({
    message: "Hello GET World",
  });
});

app.post("/data", (req, res) => {
  res.send(req.body);
});

export const start = () => {
  app.listen(3000, () => {
    console.log("Server is on 3000");
  });
};
