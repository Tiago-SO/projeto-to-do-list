import styles from './Record.module.css';
import plusButton from '../assets/plus-button.svg';
import { Tasks } from './Tasks';

export function Record() {
  return(
    <div className={styles.record}>
      <form action="" >
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type="submit">
          <span>Criar</span>
          <img src={plusButton} alt="" />
        </button>
      </form>
      <footer>
        <div><p>Tarefas criadas</p><span className={styles.counter}>0</span></div>
        <div><p>Concluídas</p><span className={styles.counter}>0</span></div>
      </footer>
      <Tasks />
      <Tasks />
      <Tasks />
    </div>
  )
}