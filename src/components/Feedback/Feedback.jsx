import { Component } from 'react';
import LeaveFeeedback from './Leave feedback/LeaveFeedback';

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
  render() {
    return (
      <LeaveFeeedback
        addFedback={this.addFedback}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
      />
      
    );
  }
}
