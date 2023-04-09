import { useState } from 'react';

import { FeedbackOptions } from '../Feedback/FeedbackOptions.jsx';
// import { Notification } from '../Notification/Notification.jsx';
import { Section } from '../Section/Section.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';


import { Toaster } from 'react-hot-toast';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // ==============================

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;

    positivePercentage = Math.round((good / countTotalFeedback()) * 100);
    return positivePercentage;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <div className={css['container-app']}>
        <Section className={css.title} title="Feedback widget">
          <Section className={css.title} title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
          {!countTotalFeedback() ? (
            <h3>No feedback given</h3>
          ) : (
            <Section className={css.title} title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            </Section>
          )}
        </Section>
      </div>
      {/* <Notification message="There is no feedback" /> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 10000,
          style: {
            background: 'green',
            color: '#fff',
            width: 350,
          },
        }}
      />
    </>
  );
};
