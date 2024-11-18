import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="user-container">
      <div> User Authenticated! </div>
      <div className="user-link">
        <Link to="/SignupPage">
          
          <button className="signuppage-layout signup-button">continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;