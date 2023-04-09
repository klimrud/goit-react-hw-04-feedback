import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  return (
    <div className={css['container-btn']}>
      <ul className={css.buttonWrapper}>
        {options.map(option => (
          <li key={option}>
            <button
              className={`${css.button} ${
                option === 'good' ? css.btnGreen : ''
              } ${option === 'neutral' ? css.btnBlue : ''} ${
                option === 'bad' ? css.btnRed : ''
              }`}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
