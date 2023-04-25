import React from 'react'
import './Style.css';

function Header() {
    return (
        <div className='flex justify-between items-center p-6 bg-gray-100'>
            <p className='header-text'>Ship<span className='blue-text'>Mate</span></p>

            <div className='w-56 flex justify-between items-center'>
                <button>Login</button>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Header;