import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getisLoggedIn } from "../../../Routes/Storage";
import Wrapper from "./Wrapper";
import WithOutLoginHome from "./WithOutLoginHome";
import "./Home.css";
import { PATH_NAME } from "../../../Routes/PathName";

function Home() {
  const navigate = useNavigate();
  const [loginStatus, setloginStatus] = useState(false);

  useEffect(() => {
    setloginStatus(getisLoggedIn());
  }, []);

 
  useEffect(() => {
    if (getisLoggedIn()) {
      navigate(PATH_NAME.DASHBOARD, { replace: true });
    }
  }, [getisLoggedIn()]);

  
  if (loginStatus) {
    return (<Wrapper><Outlet /></Wrapper>);
  }
  else {
    return (<WithOutLoginHome />);
  }

 
}

export default Home;
