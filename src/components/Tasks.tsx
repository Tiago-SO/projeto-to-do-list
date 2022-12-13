import styles from './Tasks.module.css';



export function Tasks({content}) {
  console.log(content)
  return(
    <div className={styles.task}>
      
      <div>
      <input type="checkbox" />
        {content.map(line =>{
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type !== 'paragraph') {
            return <p>{line.content}</p>;
          };
        })}
      </div>
      <button className={styles.trash} title="Apagar tarefa" type="submit"></button>
    </div>
  )
}