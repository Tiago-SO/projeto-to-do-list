import { Header } from './components/Header';
import { Record } from './components/Record';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Record />

      </div>
    </div>
  )
}

export default App
