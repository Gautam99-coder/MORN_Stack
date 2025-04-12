import { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAdd }: { onAdd: () => void }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post('http://localhost:5000/api/todos', { title });
      setTitle('');
      onAdd(); // Refresh the todo list
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="px-4 py-2 border rounded-md w-full"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
