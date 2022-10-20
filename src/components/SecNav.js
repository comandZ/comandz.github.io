import React from 'react';

const SecNav = () => {
    return (
        <div className='navBar'>
            <h1>React Posts App</h1>
            <div className='links'>
                <a className="menu-item-link" href="/">Home</a>
                <a className="menu-item-link" href="/create">Create Blog</a>
            </div>
        </div>
    )
}

export default SecNav;