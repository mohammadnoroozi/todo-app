import { createContext } from "react";

export default createContext({
    tasks: [],
    setTasks: () => { },
    boards: {},
    setBoards: () => { },
    loading: false,
    setLoading: () => { },
    handleChangeTask: () => { },
    handleDragStart: () => { },
    handleDrop: () => { },
    handleDragOver: () => { },
    handleCheckbox: () => { },
    handleClickNewBtn: () => { },
    handlePaste: () => { },
    removeTask: () => { },
});
