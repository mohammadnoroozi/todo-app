import React, { useContext, useMemo, useState } from 'react'

import "./Board.css"

// Task 
import Task from '../Task'

// Loading (When user click the checkbox show loading instead number of tasks)
import Loading from '../Loading'

// New Button (Below tasks to add a new task)
import NewBtn from '../NewBtn'

// Main Context
import MainContext from "../../context";

import PropTypes from "prop-types";

import { initialData } from '../../data/initialData';

const Board = ({
    board,
}) => {

    const {
        tasks,
        loading,
        handleDrop,
        handleDragOver,
        handleClickNewBtn,
    } = useContext(MainContext)

    // When user add new task textarea is focus
    const [focus, setFocus] = useState(false);

    // Filter board tasks
    const boardTasks = useMemo(() => {
        return tasks.filter(task => task.board === board.id)
    }, [board.id, tasks]);

    return (
        <div
            className='board'
            style={{ background: board.bg }}
            onDrop={e => handleDrop(e, board.id)}
            onDragOver={handleDragOver}
        >
            <div className='board-header'>
                <h1 className='board-title' style={{ color: board.titleColor }}>
                    {/* Show board title */}
                    {board.title}
                </h1>
                <span className='board-sub-title' style={{ color: board.subTitleColor }}>
                    {loading.board === board.id && loading.active ? (
                        // Show loading
                        <Loading color={board.subTitleColor} />
                    ) : (
                        <>
                            {/* Show number of tasks on board */}
                            {boardTasks.length} Tasks
                        </>
                    )}

                </span>
            </div>
            <div className='board-body'>
                {boardTasks.map(task => (
                    <Task
                        key={task.id}
                        board={board}
                        task={task}
                        focus={focus}
                    />
                ))}
            </div>
            <div className='board-footer'>
                {
                    board.id !== "Done" && (
                        <NewBtn boardId={board.id} color={board.newButtonColor} handleClickNewBtn={handleClickNewBtn} setFocus={setFocus} />
                    )
                }
            </div>
        </div>
    )
}

export default Board;

Board.propTypes = {
    /** board information */
    board: PropTypes.object,
};

Board.defaultProps = {
    board: initialData.boards.Done,
};