// Hooks
import React, { useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';

// Components
import Header from './components/Header';
import Board from './components/Board';

// Generate Id for task with numbers
import { nanoid } from './utils/nanoid';
// Calculate number of lines of text
import { lines } from './utils/lines';

// Initial Data
import { initialData } from './data/initialData';

// Main Context
import MainContext from "./context";

function App() {

  // States
  const [tasks, setTasks] = useState([]);
  const [boards, setBoards] = useState({});
  const [loading, setLoading] = useState({ board: "Todo", active: false });


  useEffect(() => {
    // Get data(tasks and boards) from localStorage 
    const getDataFromLocalStorage = localStorage.getItem("data");

    // if data exist in localStorage setState with data
    // if data not exist setState with initialData
    if (JSON.parse(getDataFromLocalStorage)?.tasks?.length && JSON.parse(getDataFromLocalStorage)?.boards) {
      setTasks(JSON.parse(getDataFromLocalStorage).tasks);
      setBoards(JSON.parse(getDataFromLocalStorage).boards);
    } else {
      setTasks(initialData.tasks);
      setBoards(initialData.boards);
    }
  }, [])


  useEffect(() => {
    //   // When tasks are change saving them on localStorage
    localStorage.setItem("data", JSON.stringify({ tasks, boards }))
  }, [tasks])


  // Update task when user write in textarea
  const handleChangeTask = (e, task) => {
    const allTasks = [...tasks];
    const index = allTasks.findIndex(t => t.id === task.id);
    allTasks[index].content = e.target.value.includes("//") ? e.target.value.split("//")[1] : e.target.value;
    setTasks([...allTasks])
  }


  // When user start dragging task set task on dataTransfer and get that in handleDrop function
  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', task);
  };


  const handleDrop = (e, targetStatus) => {
    // Get dragging task 
    let task = e.dataTransfer.getData('task');
    task = JSON.parse(task);

    // if oldBoard equal to targetBoard do nothing and return
    if (targetStatus === task.oldBoard) return;

    // Change droped task board to targetBoard 
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    updatedTasks.push({ id: Number(nanoid()), board: targetStatus, content: task.content });
    setTasks([...updatedTasks]);

    // Show success message
    toast.success("Task board changed successfully")
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


  // When user clicked on task checkbox 
  // if task board is "Todo", changed task board to "Done" after 3 seconds 
  // if task board is "Done", changed task board to "Todo" after 3 seconds 
  const handleCheckbox = (boardId, task) => {

    const updatedTasks = tasks.filter(t => t.id !== task.id);
    updatedTasks.push({ id: Number(nanoid()), board: boardId === "Done" ? "Todo" : "Done", content: task.content });

    setLoading({ board: boardId, active: true });

    setTimeout(() => {

      setTasks([...updatedTasks]);
      setLoading({ board: boardId, active: false });
      toast.success("Task board changed successfully")

    }, 3000);

  }


  // When user click on New button add new task on board
  const handleClickNewBtn = (boardId) => {
    // if user not fill last task and try to add new task do nothing and show error message
    if (tasks.length && tasks[tasks.length - 1].content.trim() === "" && tasks[tasks.length - 1].board === boardId) {
      toast.error("First fill the last task and then add")
    } else {
      setTasks(prev => ([...prev, { id: Number(nanoid()), content: "", board: boardId }]));
    }
  }


  // When user pasted a text from clipboard and text has 3 lines, turns each line into a task
  const handlePaste = (event, board, task) => {
    // Get copied text from clipboard
    let pastedText = event.clipboardData.getData('text');
    // calculate number of line of text with lines function
    pastedText = lines(pastedText);
    if (pastedText.length === 3) {
      let newTasks = [];
      pastedText.map((text, index) => {
        return newTasks.push({ id: Number(nanoid()), content: index === 2 ? `//${text}` : text.trim(), board: board.id });
      })
      setTasks([...tasks.filter(t => t.id !== task.id), ...newTasks])
    }
  }


  // When user click the remove Icon on task, deleted task
  const removeTask = (task) => {
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    setTasks(updatedTasks);

    // Show success message
    toast.success("Task deleted successfully")
  }


  return (
    <MainContext.Provider
      value={{
        tasks,
        boards,
        loading,
        handleChangeTask,
        handleDragStart,
        handleDrop,
        handleDragOver,
        handleCheckbox,
        handleClickNewBtn,
        handlePaste,
        removeTask,
      }}
    >
      <div className='container'>
        <div className="main">

          {/* Header */}
          <Header />

          <div className="boards">

            {Object.keys(boards).map(boardId => {

              // Get board info from boards
              const board = boards[boardId]

              return (
                <Board
                  key={board.id}
                  board={board}
                />
              )
            })}

          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
