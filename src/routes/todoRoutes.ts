import { Router } from 'express';
import {
  addTodo,
  deleteAllTodos,
  getTodos,
  getTodosById,
} from '../controllers/todoController';

const router = Router();

/** RESTFul API */
router.route('/todos').get(getTodos).post(addTodo).delete(deleteAllTodos);
router.route('/todos/:id').get(getTodosById);

export default router;
