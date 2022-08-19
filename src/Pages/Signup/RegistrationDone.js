import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

const RegistrationDone = () => {
  return (
    <div>
      <h1>
       Registration Successful...
        <Link to="/tutorfunctions">
          <span>Click here to go homepage</span>
        </Link>
      </h1>
      <img src="https://static.vecteezy.com/system/resources/previews/005/962/374/non_2x/illustration-graphic-cartoon-character-of-login-vector.jpg" alt="registrationdone" width="450" height="450"></img>
    </div>
  );
};

export default RegistrationDone;