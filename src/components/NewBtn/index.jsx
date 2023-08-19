import React from 'react';

import PropTypes from "prop-types";

import "./NewBtn.css"

const NewBtn = ({ boardId, color, handleClickNewBtn, setFocus }) => {

    return (
        <div className='new-btn' style={{ color }} onClick={() => {
            handleClickNewBtn(boardId);
            setFocus(true)
        }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
                <rect x="5.14285" width="1.71429" height="12" rx="0.857143" fill={color} />
                <rect y="6.85714" width="1.71429" height="12" rx="0.857143" transform="rotate(-90 0 6.85714)" fill={color} />
            </svg>
            <span>
                New
            </span>
        </div>
    )
}

export default NewBtn;

NewBtn.propTypes = {
    /** board id */
    boardId: PropTypes.string,
    /** icon and text color */
    color: PropTypes.string,
    /** onclick function */
    handleClickNewBtn: PropTypes.func,
    setFocus: PropTypes.func,
};

NewBtn.defaultProps = {
    boardId: "Todo",
    color: "#D37A87",
    handleClickNewBtn: () => { },
    setFocus: () => { },
}