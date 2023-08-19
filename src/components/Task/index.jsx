import React, { useContext, useRef, useState } from 'react'

import "./Task.css"

import PropTypes from "prop-types";

import { lines } from '../../utils/lines';

// Remove Icon 
import RemoveIcon from '../RemoveIcon';

import MainContext from "../../context";

const Task = ({
    board,
    task,
    focus,
}) => {

    const {
        handleDragStart,
        handleChangeTask,
        handleCheckbox,
        handlePaste,
        removeTask
    } = useContext(MainContext);

    const [dragging, setDragging] = useState(false);
    const [showRemoveIcon, setShowRemoveIcon] = useState(false);
    const textareaRef = useRef();

    return (
        <div
            // When user mouse enter task div show remove icon
            onMouseEnter={() => setShowRemoveIcon(true)}
            // When user mouse leave task div hide remove icon
            onMouseLeave={() => setShowRemoveIcon(false)}
            // When user click on the task, textarea is focus
            onClick={() => textareaRef.current.focus()}
            // When user start dragging, onDragStart function is run
            onDragStart={e => {
                handleDragStart(e, JSON.stringify({ ...task, oldBoard: board.id }))
                // SetDragging true and add "is-dragging" class to the task div for some style
                setDragging(true);
            }}
            onDragEnd={e => {
                // SetDragging false and remove "is-dragging" class from task div 
                setDragging(false)
            }}
            draggable="true"
            className={`task ${dragging ? 'is-dragging' : ''}`}
            style={{ border: `1px solid ${board.taskBorderColor}` }}
            key={task.id}
        >
            <div
                onClick={() => handleCheckbox(board.id, task)}
                className='checkbox'
                style={{ border: `1px solid ${board.checkboxBorderColor}`, color: board.checkboxIconColor }}
            >
                {board.id === "Done" && (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30" style={{ fill: board.checkboxIconColor, stroke: board.checkboxIconColor }}>
                        <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                    </svg>
                )}
            </div>
            <textarea
                ref={textareaRef}
                autoFocus={focus}
                onPaste={(e) => handlePaste(e, board, task)}
                style={{ textDecoration: board.id === "Done" ? "line-through" : "none" }}
                rows={lines(task?.content).length}
                type='text'
                value={task.content}
                name={task.id}
                onChange={e => handleChangeTask(e, task)}
            />
            <div className='pointer removeIcon' style={{ opacity: showRemoveIcon ? 1 : 0 }} onClick={() => removeTask(task)}>
                <RemoveIcon color={board.removeIconColor || board.subTitleColor} />
            </div>
        </div>
    )
}

export default Task;


Task.propTypes = {
    /** board information */
    board: PropTypes.object,
    /** task */
    task: PropTypes.object,
    /** auto focus for textarea */
    focus: PropTypes.bool
};

Task.defaultProps = {
    board: {
        id: "Todo",
        title: "Todo",
        bg: "#FEF4F3",
        titleColor: "#6E1E29",
        subTitleColor: "#D4AFB4",
        newButtonColor: "#D37A87",
        checkboxBorderColor: "#EDD6D3",
        taskBorderColor: "#F3E1DF",
        removeIconColor: "#F4C5CB"
    },
    task: {
        id: 2,
        content: "Read to learn something new every day",
        board: "Todo"
    },
    focus: false
}