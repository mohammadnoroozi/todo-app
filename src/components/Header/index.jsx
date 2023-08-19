import React from 'react';

import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>&#10004; Task List</div>
            <p className='sub-title'>
                Break your life to simple tasks to get things done! <br />
                Does not matter how many tasks you done, It’s important to break to small tasks and be on progress.
            </p>
        </div>
    )
}

export default Header