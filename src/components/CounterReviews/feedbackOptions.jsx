import React from "react";
import PropTypes from 'prop-types';
import '../CounterReviews/BtnStyle.module.css'

const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (<div>{options.map(option => (
        <button type="button"
        key={option} 
        name={option}
        onClick={(e)=> {onLeaveFeedback(e)}}>{option}</button>))}
        </div>)}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};