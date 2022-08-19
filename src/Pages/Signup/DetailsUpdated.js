import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

const DetailsUpdated = () => {
  return (
    <div>
      <h1>
       Details Updated Successfully...
        <Link to="/tutorfunctions">
          <span>Click here to go homepage</span>
        </Link>
      </h1>
      <img src="https://static.vecteezy.com/system/resources/previews/006/685/422/original/illustration-graphic-cartoon-character-of-checklist-vector.jpg" alt="registrationdone" width="450" height="450"></img>
    </div>
  );
};

export default DetailsUpdated;