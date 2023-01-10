import { Component } from 'react';
import LeaveFeeedback from './LeaveFeedback/LeaveFeedback';
import Statistic from './Statistic/Statistic';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleaddFedback = e => {
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
          onAddFedback={this.handleaddFedback}
         state={this.state}
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