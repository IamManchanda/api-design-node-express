import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

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
