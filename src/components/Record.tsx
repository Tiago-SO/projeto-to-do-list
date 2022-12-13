import styles from './Record.module.css';
import plusButton from '../assets/plus-button.svg';
import { Tasks } from './Tasks';

const tasks = [
  {
    id: 1,
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, cupiditate dolorum a vero autem ipsam rerum ipsa odio ex?'
      }
    ]
  }
];

export function Record() {
  return (
    <div className={styles.record}>
      <form action="" >
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type="submit">
          <span>Criar</span>
          <img src={plusButton} alt="" />
        </button>
      </form>
      <footer>
        <div><p>Tarefas criadas</p><span className={styles.counter}>0</span></div>
        <div><p>Concluídas</p><span className={styles.counter}>0</span></div>
      </footer>
      {tasks.map(tasks => {
        return (
          <Tasks
            content={tasks.content}
          />
        )
      })}
    </div>
  )
}