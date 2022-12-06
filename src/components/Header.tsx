import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo do Projeto" />
      <p><span>to</span><span>do</span></p>
    </header>
  )
}