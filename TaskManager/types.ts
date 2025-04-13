// types.ts
type Priority = 'low' | 'medium' | 'high';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
}

// taskManager.ts
class TaskManager<T extends Task> {
  private tasks: T[] = [];

  constructor(private storageKey: string = 'tasks') {
    this.loadTasks();
  }

  addTask(task: Omit<T, 'id' | 'completed'>): T {
    const newTask = {
      ...task,
      id: crypto.randomUUID(),
      completed: false,
    } as T;
    
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  toggleComplete(id: string): void {
    this.tasks = this.tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveTasks();
  }

  getTasks(filter?: Partial<T>): T[] {
    return this.tasks.filter(task => 
      Object.entries(filter || {}).every(([key, value]) => 
        task[key as keyof T] === value
      )
    );
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private loadTasks(): void {
    const storedTasks = localStorage.getItem(this.storageKey);
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }
}

// app.ts
class TaskApp {
  private form: HTMLFormElement;
  private taskList: HTMLUListElement;
  private taskManager = new TaskManager<Task>();

  constructor() {
    this.form = document.getElementById('taskForm') as HTMLFormElement;
    this.taskList = document.getElementById('taskList') as HTMLUListElement;
    
    this.initialize();
  }

  private initialize(): void {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.renderTasks();
  }

  private handleSubmit(e: Event): void {
    e.preventDefault();
    const formData = new FormData(this.form);
    
    const newTask = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      dueDate: new Date(formData.get('dueDate') as string),
      priority: formData.get('priority') as Priority,
    };

    this.taskManager.addTask(newTask);
    this.form.reset();
    this.renderTasks();
  }

  private renderTasks(): void {
    this.taskList.innerHTML = '';
    
    this.taskManager.getTasks().forEach(task => {
      const li = document.createElement('li');
      li.className = `task ${task.completed ? 'completed' : ''} priority-${task.priority}`;
      li.innerHTML = `
        <div>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <small>Due: ${new Date(task.dueDate).toLocaleDateString()}</small>
        </div>
        <div class="actions">
          <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      li.querySelector('.complete-btn')!.addEventListener('click', () => {
        this.taskManager.toggleComplete(task.id);
        this.renderTasks();
      });

      li.querySelector('.delete-btn')!.addEventListener('click', () => {
        this.taskManager.deleteTask(task.id);
        this.renderTasks();
      });

      this.taskList.appendChild(li);
    });
  }
}

// Initialize app
new TaskApp();
