import React from 'react';
import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <div>
      <ul>
        {Object.keys(props).map(prop => {
          return (
            <li key={prop}>
              <p>
                {validationText(prop)}: <span>{props[prop]}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
function validationText(value) {
  const validPositiveName =
    value === 'positivePercentage' ? 'positiveFeedback' : value;

  return validPositiveName
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^\w/, c => c.toUpperCase());
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
