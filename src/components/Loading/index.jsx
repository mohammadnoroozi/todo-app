import React from 'react'
import PropTypes from "prop-types";

const Loading = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="25 25 50 50"
            xmlSpace="preserve"
            width={"16px"}
            height={"16px"}
        >
            <path
                fill={color}
                d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    dur="1s"
                    from="0 50 50"
                    repeatCount="indefinite"
                    to="360 50 50"
                    type="rotate"
                ></animateTransform>
            </path>
        </svg>
    )
}

export default Loading;

Loading.propTypes = {
    /** loading color */
    color: PropTypes.string,
};

Loading.defaultProps = {
    color: "#D4AFB4",
}