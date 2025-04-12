import { Router } from 'express';
import Todo from '../models/Todo';

const router = Router();

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add new todo
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

export default router;
