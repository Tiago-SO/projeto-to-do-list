import styles from './Record.module.css';
import plusButton from '../assets/plus-button.svg';
import clipBoard from '../assets/clipboard.svg';
import { Tasks } from './Tasks';
import { ITask } from '../App';
import { ChangeEvent, FormEvent, useState } from 'react';


interface Props{
  tasks: ITask[],
  onAddTask: (taskTitle: string) => void;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}


export function Record({tasks,onAddTask, onDelete, onComplete}: Props) {
  const [title, setTitle] = useState("");

  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  function handleSubmit (event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }
  
  function onChangeTitle (event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <div className={styles.record}>
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          <span>Criar</span>
          <img src={plusButton} alt="" />
        </button>
      </form>
      <footer>
        <div>
          <p>Tarefas criadas</p>
          <span className={styles.counter}>{tasksCreated}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span className={styles.counter}>
            {tasksCompleted} de {tasksCreated}
          </span>
        </div>

      </footer>
      {tasks.map((task) => (
        <Tasks 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onComplete={onComplete}
          />
      ))}

      {tasks.length <= 0 && (
        <div className={styles.empty}>
          <img src={clipBoard} alt="" />
          <p>Você ainda não tem tarefaz cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  )
}