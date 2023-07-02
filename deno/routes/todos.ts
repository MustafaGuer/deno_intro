import { Router } from "https://deno.land/x/oak/mod.ts";

import { Todo } from "../models/todo.ts";

const router = new Router();

let todos: Todo[] = [];

router.get("/todos", (ctx, next) => {
  ctx.response.body = { todos };
});

router.post("/todos", async (ctx, next) => {
  const body = ctx.request.body({ type: "json" });
  const result = await body.value;

  const newTodo: Todo = {
    _id: crypto.randomUUID(),
    text: result.text,
  };

  todos.push(newTodo);

  ctx.response.body = { message: "Todo created!", todo: newTodo, todos };
});

router.put("/todos/:todoId", async (ctx, next) => {
  const tid = ctx.params.todoId;
  const body = ctx.request.body({ type: "json" });
  const result = await body.value;
  const todoIndex = todos.findIndex((todo) => todo._id === tid);
  todos[todoIndex] = { _id: todos[todoIndex]._id, text: result.text };
  ctx.response.body = { message: "Todo updated!", todo: todos[todoIndex] };
});

router.delete("/todos/:todoId", (ctx, next) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo._id !== tid);
  ctx.response.body = { message: "Todo deleted!", todos };
});

export default router;
