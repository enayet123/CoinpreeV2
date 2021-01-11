import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from '../../actions';
import styles from './Converter.module.scss';
import LabelledField from './LabelledField/LabelledField';

/* eslint-disable prefer-template */
const roundTo = (num, dec) => (+(Math.round(num + `e+${dec}`) + `e-${dec}`));

const Converter = () => {
  // Redux store
  const dispatch = useDispatch();
  const price = useSelector((state) => state.prices.BTC);
  const balance = useSelector((state) => state.balance);

  // Change handlers
  const balanceChange = (e) => dispatch(updateBalance(e.target.value));
  const totalChange = (e) => dispatch(updateBalance(e.target.value / price));

  const total = () => price * balance;

  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <LabelledField values={{ key: 'BTC', value: roundTo(balance, 5) }} handleValChange={balanceChange} />
      </div>
      <div className={styles.element}>=</div>
      <div className={styles.element}>
        <LabelledField values={{ key: 'GBP', value: roundTo(total(), 2) }} handleValChange={totalChange} />
      </div>
    </div>
  );
};

export default Converter;
