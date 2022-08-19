import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

const TutorBooked = () => {
  return (
    <div>
      <h1>
       Booking Successful...
        <Link to="/parentfunctions">
          <span>Click here to go homepage</span>
        </Link>
      </h1>
      <img src="https://i.pinimg.com/736x/ef/64/8f/ef648fe0c7232614bbdef5870c5d8eab.jpg" alt="registrationdone" width="450" height="450"></img>
    </div>
  );
};

export default TutorBooked;