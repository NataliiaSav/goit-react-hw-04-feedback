import React, {useState} from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistic/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css"

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default: break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return good !== 0
      ? Math.round((good / countTotalFeedback()) * 100) : 0
  }
  const options = Object.keys({good, neutral, bad})

    return (
      <div className={css.container}>
        <Section title ='Please leave feedback'>
          <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        
        <Section title='Statistics'>
          { countTotalFeedback() > 0 ?
        (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()} />)
            : (<Notification message="There is no feedback"/>)}
          </Section>
        
      </div>
    );
  }
            