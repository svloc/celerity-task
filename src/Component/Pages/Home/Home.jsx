import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getisLoggedIn } from "../../../Routes/Storage";
import Wrapper from "./Wrapper";
import WithOutLoginHome from "./WithOutLoginHome";
import "./Home.css";

function Home() {
  const [loginStatus, setloginStatus] = useState(false);
  useEffect(() => {
    setloginStatus(getisLoggedIn());
  }, []);

  if (loginStatus) {
    return (<Wrapper><Outlet /></Wrapper>);
  }
  else {
    return (<WithOutLoginHome />);
  }
}

export default Home;
