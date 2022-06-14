import React from 'react';
import styles from './_header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>
            <a className={styles.header__navLink} href='#'>
              Обо мне
            </a>
          </li>
          <li className={styles.header__navItem}>
            <a className={styles.header__navLink} href='#'>
              Skills
            </a>
          </li>
          <li className={styles.header__navItem}>
            <a className={styles.header__navLink} href='#'>
              Портфолио
            </a>
          </li>
          <li className={styles.header__navItem}>
            <a className={styles.header__navLink} href='#'>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
