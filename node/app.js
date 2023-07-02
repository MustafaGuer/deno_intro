import express from "express";

import bodyParser from "body-parser";

import todoRoutes from "./routes/todos.js";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("Blub");
  next();
});

app.use(todoRoutes);

app.listen(3000);
