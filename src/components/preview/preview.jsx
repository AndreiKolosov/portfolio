import React from 'react';
import styles from './_preview.module.scss';
import { countFullAge } from '../../utils/utils';
import me from '../../images/me.png';

const Preview = () => {
  const years = countFullAge(1994, 6, 20);

  return (
    <div className={styles.preview}>
      <h1 className={styles.preview__name}>Андрей Колосов</h1>
      <div className={styles.preview__info}>
        <p className={styles.preview__profession}> Front-end Developer</p>
        <span className={styles.preview__additional}>{years}&nbsp;лет, Калининград</span>
      </div>
      <div className={styles.preview__langPanel}>
        <ul className={styles.preview__langList}>
          <li className={styles.preview__langListItem}>
            <a className={styles.preview__langLink}>RUS</a>
          </li>
          <li className={styles.preview__langListItem}>
            <a className={styles.preview__langLink}>ENG</a>
          </li>
        </ul>
      </div>
      <img className={styles.preview__photo} src={me} alt='Мое фото' />
    </div>
  );
};

export default Preview;
