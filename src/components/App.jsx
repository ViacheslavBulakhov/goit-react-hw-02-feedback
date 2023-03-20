import React from 'react';
import Statistics from './CounterReviews/statistics';
import FeedbackOptions from './CounterReviews/feedbackOptions';
import Notification from './CounterReviews/notification';
import Section from './CounterReviews/section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return `${Math.ceil((this.state.good / total) * 100 || 0)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'start',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>

          <Section title="Statistics">
            {!total ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
