import { model, Schema } from 'mongoose';

const todoSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Todo = model('Todo', todoSchema);

export default Todo;
