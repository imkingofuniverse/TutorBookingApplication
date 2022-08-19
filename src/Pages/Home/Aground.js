import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./Aground.css";



function Aground(){
  const navigate = useNavigate();
    function HomeTutor(){
        navigate("/adminlogin");
      }
      function tsignup(){
        navigate("/signup");
      }
    return(
      <div>
        <div className="left">
          <img src="https://img.freepik.com/free-vector/system-administrators-sysadmins-are-servicing-server-racks-system-administration-upkeeping-configuration-computer-systems-networks-concept-pinkish-coral-blue-palette-vector-illustration_335657-1642.jpg?w=2000" alt="no car displayed"
          width={400} height={300}></img>
        </div>

        <div className="bottom-left">
          <h1>Admin</h1>
          <p>We manage the parent tutor relations and maintain the site to provide the best services.
  
          </p>
          <Button color="primary" variant="contained" onClick={HomeTutor}>Login</Button>
          <Button color="primary" variant="contained" >Signup</Button>
        </div>
      </div>
    );
  } 


  /*const navigate = useNavigate();
    function HomeTutor(){
        navigate("/login");
      }
      function tsignup(){
        navigate("/signup");
      }
    return(
      <div>
        <div className="right">
          <h1>Tutor</h1>
          <p>We are the best teachers who plan to execute at the deepest level with subject. We simply believe in a personalized learning program for every student.
  
          </p>
          <Button color="primary" variant="contained" onClick={HomeTutor}>Login</Button>
          <Button color="primary" variant="contained" onClick={tsignup}>Signup</Button>
          

        </div>
        <div className="bottom-right">
          <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg" alt="no car displayed"
          width={400} height={300}></img>
        </div>
        
      </div>
    );
  }*/
  
  export default Aground;