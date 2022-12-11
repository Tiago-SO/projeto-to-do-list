import styles from './Tasks.module.css';

interface Content {
  content: string;
}

export function Tasks(content:Content) {
  console.log(content)
  return(
    <div className={styles.task}>
      
      <div>
      <input type="checkbox" placeholder="Adicione uma nova tarefa!" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum ex quis, unde ut veritatis eaque vitae animi quia necessitatibus vero quo est esse accusamus sunt voluptate quasi enim ipsum!</p>
      </div>
      <button className={styles.trash} title="Apagar tarefa" type="submit"></button>
    </div>
  )
}