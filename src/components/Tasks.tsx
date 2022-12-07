import styles from './Tasks.module.css';

export function Tasks() {
  return(
    <div className={styles.task}>
      <div className={styles.checkbox}>
      <input type="checkbox" />
      </div>
    </div>
  )
}