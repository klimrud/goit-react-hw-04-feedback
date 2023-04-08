import { useState, useEffect } from 'react';
import { Section } from '../Section/Section.jsx';
import { FeedbackOptions } from '../Feedback/FeedbackOptions.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';
import { Notification } from '../Notification/Notification.jsx';
 import { Toaster } from 'react-hot-toast';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log('good', good);
  console.log('neutral', neutral);
  console.log('bad', bad);

   //   // const values =  Object.values(this.state)keys
 
// ==============================
// -------------------------
  const handleClickGood = () => {
  
    setGood(prevState =>  prevState + 1 ); 

};

  const handleClickNeutral = () => {
    setNeutral(prevState =>  prevState + 1 );
 
};

  const handleClickBad = () => {
    setBad(prevState =>  prevState + 1 );
 
};

// --------------------
  // =================
    // const onLeaveFeedback = ({good, neutral, bad}) => {
    //      console.log('e', good );
    //    
    //       setGood(prevState =>  prevState + 1 );
    //       setNeutral(prevState =>  prevState + 1 );
    //       setBad(prevState =>  prevState + 1 );
    // };
  // =================
  //  useEffect(() => {

   const countTotalFeedback = () => {
    return good + neutral + bad;
     };

//      countTotalFeedback()
// }, [good,neutral,bad])

  // =================
  //   const countTotalFeedback = (prevState) => {
  //     //     console.log('countTotalFeedback', countTotalFeedback)
  //     console.log('good t', good);

  //     if (prevState.good !== good ||prevState.neneutral !==neutral ||prevState.bad !== bad  ){
  //     let totalFeedback = good + neutral + bad;
  //     console.log('totalFeedback', totalFeedback)
  //         return totalFeedback;}
  //   };

     const countPositiveFeedbackPercentage = () => {
      let positivePercentage = 0;
      positivePercentage = Math.round((good / countTotalFeedback()) * 100);
      return positivePercentage;
     };

  return (
    <div className={css['container-app']}>
      <Section className={css.title} title="Feedback widget">
        <Section className={css.title} title="Please leave feedback">
          <FeedbackOptions 
          onGood={handleClickGood}
          onNeutral={handleClickNeutral}
          onBad={handleClickBad}
          // onLeaveFeedback={onLeaveFeedback} 
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <>  
            <h3>No feedback given</h3>
          
            <Notification message="There is no feedback" />
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={4}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                
                className: '',
                duration: 5000,
                style: {
                  background: 'green',
                  color: '#fff',
                  width: 350,
                },
              }}
            />
          </>
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
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   // const values =  Object.values(this.state)keys

//   onLeaveFeedback = keys => {
//     // console.log('e', keys);
//     this.setState(prevState => ({ [keys]: prevState[keys] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     let positivePercentage = 0;
//     positivePercentage = Math.round(
//       (this.state.good / this.countTotalFeedback()) * 100
//     );
//     // this.setState(prevState => ({
//     //   positivePercentage: Math.ceil((prevState.good / prevState.countTotalFeedback()) * 100),
//     // }));
//     return positivePercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className={css['container-app']}>
//         <Section className={css.title} title="Feedback widget">
//           <Section className={css.title} title="Please leave feedback">
//             <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
//           </Section>
//           {this.countTotalFeedback() === 0 ? (
//             <>
//               <h3>No feedback given</h3>{''}
//               <Notification message="There is no feedback" />
//               <Toaster
//                  position="top-right"
//                  reverseOrder={false}
//                 gutter={8}
//                 containerClassName=""
//                 containerStyle={{}}
//                 toastOptions={{
//                   // Define default options
//                   className: '',
//                   duration: 5000,
//                   style: {
//                     background: 'green',
//                     color: '#fff',
//                   },
//                 }}
//               />
//             </>
//           ) : (
//             <Section className={css.title} title="Statistics">
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             </Section>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// // ===================================================

