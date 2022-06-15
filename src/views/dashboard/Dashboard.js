import React, { useContext } from "react";
import { authContext } from "../../context/authContext";

const Dashboard = () => {
  const {user} = useContext(authContext);
  console.log({user})
  return ( 
    <h1>dashboard</h1>
  );
};

export default Dashboard