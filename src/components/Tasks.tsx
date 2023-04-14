import { ITask } from '../App';
import styles from './Tasks.module.css';

interface Props{
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ task,onDelete,onComplete }: Props) {
  
  return(
    <div className={styles.task}>
      
      <div>
      <input type="checkbox" onClick={() => onComplete(task.id)} />
      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
        
      </div>


      <button className={styles.trash} onClick={() => onDelete(task.id)}></button>
    </div>
  )
}