import React, { useEffect, useState } from 'react'
import './Style.css';
import Button from '../../Centimeter/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { PATH_NAME } from '../../../Routes/PathName';
import { getisLoggedIn } from '../../../Routes/Storage';
import DollarsquareImg from '../../../Assets/Icons/dollarsquare.svg'

function Header() {
    const navigate = useNavigate();
    const [loginStatus, setloginStatus] = useState(false);
    useEffect(() => {
        setloginStatus(getisLoggedIn());
    }, []);

    const handleButtonClick = () => {
        navigate('/shipment-summary', { replace: true });
      };
    
    return (
        <div className='flex justify-between items-center pb-4 pt-2'>
            <p className='header-text' >Ship<span className='blue-text'>mate.</span></p>
            <div className='flex justify-between items-center gap-x-5'>
                {!loginStatus ? <>
                    <Link to={PATH_NAME.LOGIN}><Button>Login</Button></Link>
                    <Button variant='outlined'>Learn More</Button>
                </> :
                    <>
                        <img alt='dollarsquare' src={DollarsquareImg} className='w-1/6'/>
                        <Button onClick={handleButtonClick}>Track shipment</Button>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;