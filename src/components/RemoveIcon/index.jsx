import React from 'react'
import PropTypes from "prop-types";


const RemoveIcon = ({ color }) => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12.1218" y="3.63655" width="1.71429" height="12" rx="0.857143" transform="rotate(45 12.1218 3.63655)" fill={color} />
            <rect x="3.63656" y="4.84873" width="1.71429" height="12" rx="0.857143" transform="rotate(-45 3.63656 4.84873)" fill={color} />
        </svg>
    )
}

export default RemoveIcon;

RemoveIcon.propTypes = {
    /** icon color */
    color: PropTypes.string,
};

RemoveIcon.defaultProps = {
    color: "#F4C5CB",
}