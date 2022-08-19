import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button, Card, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
//import RouterDom from './RouterDom';
import { Link, withRouter, useNavigate } from "react-router-dom";
import './TutorFunctions.css';

function TutorFunctions() {
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState('white')
  const buttonhandle = () =>
  {
    setDisable(true);
    setColor('#d6d5d2');
  }
    return (
        <div style={{marginTop: "12%"}}>
          
            <NavLink  
            className ="Funcbutton" 
            to="/updatedetails">
              Update Details
              </NavLink>  
            <NavLink 
            className ="Funcbutton"       
            to="/viewtutors">
              View Tutors
              </NavLink>
            

           
        </div>
    )
}

export default TutorFunctions;
