import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm onAdd={() => setRefresh(!refresh)} />
      <TodoList />
    </div>
  );
}

export default App;
