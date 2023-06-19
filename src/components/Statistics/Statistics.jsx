import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <h2>Statistics</h2>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
