import React from "react";
import PropTypes from 'prop-types';


const Statistics = (props)=> {
  return(  
  <div>
    <ul>
        {Object.keys(props).map(prop => (
        <li key={prop}><p>{prop}: <span>{props[prop]}</span></p></li>))}
    </ul>
  </div>
  )
}

export default Statistics;
Statistics.propTypes = {
  props: PropTypes.object,
}
