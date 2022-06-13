import React from 'react';
import styles from './_app.module.scss';
import { MainPage } from '../../pages';

const App = () => {
  return (
    <div className={styles.app}>
      <MainPage />
    </div>
  );
};

export default App;
