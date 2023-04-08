import React from 'react';
import PropTypes from 'prop-types';
import { reviews } from './reviews';
import css from 'components/Feedback/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
 
  return (
    <div className={css['container-btn']}>
      {/* <ul>
        {reviews.map((review) => (
          <li key={review.toString()}>
          <button
        className={css.btnBlue}
        type="button"
        onClick={() => onLeaveFeedback(name)}
      >{name}
        Neutral
      </button>
          </li>
        ))}
      </ul> */}

      <button
        className={css.btnGreen}
        type="button"
        onClick={() => onGood(reviews.good)}
        // onClick={() => onLeaveFeedback(reviews.good)}
      >
        Good
      </button>
      <button
        className={css.btnBlue}
        type="button"
        onClick={() => onNeutral(reviews.neutral)}
      >
        Neutral
      </button>
      <button
        className={css.btnRed}
        type="button"
        onClick={() => onBad(reviews.bad)}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  // onLeaveFeedback: PropTypes.func.isRequired,
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,

};
