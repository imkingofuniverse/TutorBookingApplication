import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './ViewTutors.css';
import { Link, withRouter, useNavigate } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ViewTutors = () => {
  const navigate = useNavigate();
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/tutor/viewAllTutors").then((res) => {
      setTutors(res.data);
      console.log(res.data);
    });
  }, []);

  /*function trip() {
    navigate("/bookatrip");
  } */

  return (
    <div>
        <h1 className = "text-center">Tutor Details</h1>
        
    <div className = "tutordetails">
        
        <table className = "table table-stripped">
        <thead>
          <tr>
            
            
            <th>Name</th><br/><br/>
            <th>Mobile</th><br/><br/>
            <th>Email</th><br/><br/>
            <th>Qualification</th><br/><br/>
            <th>Subject</th><br/><br/>
            <th>City</th><br/><br/>
            
          </tr>
        </thead>
        <tbody>
          {tutors.map((tutor) => {
            return (
                <tr key = {tutor.tutorId}>
                
                <td> {tutor.name}</td><br/><br/>
                <td> {tutor.mobile}</td><br/><br/>
                <td> {tutor.email}</td><br/><br/>
                <td> {tutor.qualification}</td><br/><br/>
                <td> {tutor.subject}</td><br/><br/>
                <td> {tutor.city}</td><br/><br/>
                
                <br/><br/>

            </tr>
            );
          })}
        </tbody>
      </table> 
      <div><br/>


      </div>
      </div>
    </div>
  );
};

export default ViewTutors;