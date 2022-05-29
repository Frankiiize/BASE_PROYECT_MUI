import React, { useContext } from "react";
import { authContext } from "../../context/authContext";

const Dashboard = () => {
  const {user} = useContext(authContext);
  console.log({user})
  return ( 
    <h1>asd</h1>
  );
};

export default Dashboard