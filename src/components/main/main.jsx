import React, { Children } from 'react';
import styles from './_main.module.scss';

const Main = ({ children }) => {
  return <main className={styles.page}>{children}</main>;
};

export default Main;
