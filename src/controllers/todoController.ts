import { Request, Response } from 'express';
import Todo from '../models/Todo';

type TodoParams = {
  id: string;
};
type ResBody = {};
type ReqBody = {
  item: string;
};
type ReqQuery = {
  id: string;
};

export async function getTodos(
  req: Request<TodoParams, ResBody, ReqBody, ReqQuery>,
  res: Response
) {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ error: 'todos not found' });
  }
}

export async function addTodo(
  req: Request<TodoParams, ResBody, ReqBody, ReqQuery>,
  res: Response
) {
  const todo = new Todo({ ...req.body });
  console.log({ todo });

  try {
    const result = await todo.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
}

export async function deleteAllTodos(
  req: Request<TodoParams, ResBody, ReqBody, ReqQuery>,
  res: Response
) {
  console.log('delete');
  try {
    const result = await Todo.deleteMany({});
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
}

export async function getTodosById(
  req: Request<TodoParams, ResBody, ReqBody, ReqQuery>,
  res: Response
) {
  try {
    const { params, query, body } = req;
    console.log({ params, query, body });
    const todo = await Todo.findById(params.id);
    res.status(200).json(todo);
  } catch (error) {
    error instanceof Error
      ? res.status(404).json({ message: error.message })
      : res.status(404).json(error);
  }
}
