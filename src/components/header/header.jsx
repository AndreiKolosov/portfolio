import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.header__navList}></ul>
      </nav>
    </header>
  );
};

export default Header;
