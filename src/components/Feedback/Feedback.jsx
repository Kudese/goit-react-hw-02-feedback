import { Component } from 'react';
import LeaveFeeedback from './LeaveFeedback/LeaveFeedback';
import Statistic from './Statistic/Statistic';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFedback = e => {
    const keys = e.target.name;
    this.setState(prevState => {
      return { [keys]: prevState[keys] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <LeaveFeeedback
          addFedback={this.addFedback}
          good={good}
          neutral={neutral}
          bad={bad}
        />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
