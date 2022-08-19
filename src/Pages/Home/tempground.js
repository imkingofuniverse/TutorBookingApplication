import React from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./Background.css";



function Ground(){
    const navigate = useNavigate();
    function HomeTutor(){
        navigate("/login");
      }
      function tsignup(){
        navigate("/signup");
      }
    return(
      <div>
        <div className="left">
          <img src="https://img.freepik.com/free-vector/parents-preparing-cute-daughter-school-love-study-backpack-flat-illustration-cartoon-illustration_74855-14475.jpg?w=2000" alt="no car displayed"
          width={400} height={300}></img>
        </div>
        <div className="right">
          <h1>Tutor</h1>
          <p>We are the best teachers who plan to execute at the deepest level with subject. We simply believe in a personalized learning program for every student.
  
          </p>
          <Button color="primary" variant="contained" onClick={HomeTutor}>Login</Button>
          <Button color="primary" variant="contained" onClick={tsignup}>Signup</Button>
          
          <p>
            Not Tutor?
            <Link to="/tutorfunctions">
            <span>Parent Login</span>
            </Link>
          </p>

        </div>
        <div className="bottom-right">
          <img src="https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg" alt="no car displayed"
          width={400} height={300}></img>
        </div>
        <div className="bottom-left">
          <h1>Parent</h1>
          <p>Our niche is creating personalised learning experiences for every type of learner. Click here to register/login to find the best tutors.
  
          </p>
          <Button color="primary" variant="contained" >Login</Button>
          <Button color="primary" variant="contained" >Signup</Button>
        </div>
      </div>
    );
  }
  
  export default Ground;