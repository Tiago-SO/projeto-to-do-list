import { Header } from './components/Header';
import { Record } from './components/Record';
import './global.css';
import styles from './App.module.css';
import { useState } from 'react';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle: string) {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id!== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return{
          ...task,
            isCompleted: !task.isCompleted,
       }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <main>
        <Record 
          tasks={tasks}
          onAddTask={addTask}
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
        />
      </main>

      </div>
    </div>
  )
}

export default App
