import express from "express";
import { v4 as uuidv4 } from "uuid";

const todoRoutes = express.Router();

let todos = [];

todoRoutes.get("/todos", (req, res, next) => {
  res.json({ todos });
});

todoRoutes.post("/todos", (req, res, next) => {
  const newTodo = { id: uuidv4(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json({ message: "Todo created!", todo: newTodo });
});

todoRoutes.put("/todos/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === tid);
  todos[todoIndex] = { ...todos[todoIndex], text: req.body.text };
  res.status(200).json({ message: "Todo updated!" });
});

todoRoutes.delete("/todos/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  res.status(200).json({ message: "Todo deleted!" });
});

export default todoRoutes;
