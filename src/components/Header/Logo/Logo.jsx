import React from 'react';
import { APP_NAME } from '../../../utils/Constants';
import styles from './Logo.module.scss';

function Logo() {
  const caseCorrected = APP_NAME.toUpperCase();
  return (
    <div className={styles.logo}>{caseCorrected}</div>
  );
}

export default Logo;
