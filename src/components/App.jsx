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
  handleIncrement = e => {
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;

    const reviewsName = e.target.name;
    this.setState(prevState => {
      return { [reviewsName]: prevState[reviewsName] + 1 };
    });
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return `${((this.state.good / total) * 100).toFixed(0)}%`;
  };

  isViews = () => {
    const { good, neutral, bad } = this.state;
    return good !== 0 || neutral !== 0 || bad !== 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      handleIncrement,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      isViews,
    } = this;
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
              onLeaveFeedback={handleIncrement}
            />
          </Section>

          <Section title="Statistics">
            {!isViews() ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
