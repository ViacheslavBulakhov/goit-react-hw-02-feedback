import React from "react"
import PropTypes from 'prop-types';

const Section = ({title,children}) => (
    <section>
    <h2>{title}</h2>
    {children}
    </section>
)
export default Section;

Notification.propTypes = {
   title: PropTypes.string,
   cildren: PropTypes.element,
}