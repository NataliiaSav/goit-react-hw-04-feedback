import React, {Component} from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistic/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = state => {
    this.setState(prevState => ({
        [state]: prevState[state] + 1,
    
    }));
  }

 countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
   const total = good + neutral + bad;
   return total
  }

  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
    ? Math.round((this.state.good/this.countTotalFeedback())*100) : 0
  }
  render() {
    return (
      <div className={css.container}>
        <Section title ='Please leave feedback'>
          <Feedback options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        
        <Section title='Statistics'>
          { this.countTotalFeedback() > 0 ?
        (<Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()} />)
            : (<Notification message="There is no feedback"/>)}
          </Section>
        
      </div>
    );
  }
}                