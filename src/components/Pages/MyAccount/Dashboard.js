import React from "react";
import useAuth from "../../../hooks/useAuth";
import Title from "../../Header/HeroSection/Title";

const Dashboard = () => {
  const { user } = useAuth();
  return (
      <>
      <Title name="My Account"></Title>
    <div style={{height:"50vh"}} className="d-flex flex-column align-items-center justify-content-center ">
      <ul className="list-group container">
          <img style={{height:"150px" , width: "150px", borderRadius:"50%", margin:"0px auto"}} src={user.photoURL} alt="" />
        <li className="list-group-item mt-3">Name : {user.displayName}</li>
        <li className="list-group-item">Email: {user.email}</li>
      </ul>
    </div></>
  );
};

export default Dashboard;
