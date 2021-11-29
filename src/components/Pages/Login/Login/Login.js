import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Title from "../../../Header/HeroSection/Title";

const Login = () => {
  const {user, signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';
  if(user?.email){
    history.push(redirect_uri)
  }
  return (<>
<Title name="Login"></Title>
    <div style={{height:"50vh"}} className="d-flex flex-column align-items-center justify-content-center ">
      <div className="col-md-3 col-10 p-3 bg-light">
        <div className="text-center">
          <h2>Login to your Account</h2>
          <button onClick={signInUsingGoogle} className="btn btn-warning text-white">
            <FontAwesomeIcon icon={faGoogle} /> sign in with google
          </button>
        </div>
      </div>
    </div></>
  );
};

export default Login;
