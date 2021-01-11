import React from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import styles from './LabelledField.module.scss';

const sanitise = (e) => {
  const verified = String(e.target.innerText).replace(/[^\d.-]/g, '');
  if (e.target.innerText !== verified) {
    e.target.innerHTML = verified;
  }
};

const LabelledField = ({ values: { key, value }, handleKeyChange, handleValChange }) => (
  <div className={styles.container}>
    <ContentEditable
      className={styles.editable}
      onChange={handleValChange}
      html={value.toString(10)}
      onKeyUp={sanitise}
    />
    <ContentEditable className={styles.editable} onChange={handleKeyChange} html={key} />
  </div>
);

LabelledField.propTypes = {
  values: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  handleKeyChange: PropTypes.func,
  handleValChange: PropTypes.func,
};

LabelledField.defaultProps = {
  handleKeyChange: () => {},
  handleValChange: () => {},
};

export default LabelledField;
