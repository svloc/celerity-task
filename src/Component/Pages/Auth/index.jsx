import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { getisLoggedIn } from '../../../Routes/Storage';
import { PATH_NAME } from '../../../Routes/PathName';

function Auth() {
    const navigate = useNavigate();
    const isLoggedIn=getisLoggedIn();

    useEffect(()=>{
        if(isLoggedIn){
            navigate(PATH_NAME.DASHBOARD ,{ replace: true });
        }
    },[isLoggedIn,navigate])

  return (
    !isLoggedIn && <Login/>
  )
}

export default Auth;