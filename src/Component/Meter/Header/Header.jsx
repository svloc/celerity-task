import React from 'react'
import './Style.css';
import Button from '../../Centimeter/Button/Button';

function Header() {
    return (
        <div className='flex justify-between items-center py-4'>
            <p className='header-text'>Ship<span className='blue-text'>mate</span></p>
            <div className=' flex justify-between items-center gap-x-5'>
                <Button>Login</Button>
                <Button variant='outlined'>Learn More</Button>
            </div>
        </div>
    )
}

export default Header;