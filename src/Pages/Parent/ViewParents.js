import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import './ViewTutors.css';
import { Link, withRouter, useNavigate } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ViewParents = () => {
  const navigate = useNavigate();
  const [parents, setParents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/parent/parent").then((res) => {
      setParents(res.data);
      console.log(res.data);
    });
  }, []);

  /*function trip() {
    navigate("/bookatrip");
  } */

  return (
    <div>
        <h1 className = "text-center">Parent Details</h1>
        
    <div className = "tutordetails">
        
        <table className = "table table-stripped">
        <thead>
          <tr>
            
            
            <th>Name</th><br/><br/>
            <th>Mobile</th><br/><br/>
            <th>Email</th><br/><br/>
            <th>City</th><br/><br/>
            
          </tr>
        </thead>
        <tbody>
          {parents.map((parent) => {
            return (
                <tr key = {parent.parentId}>
                
                <td> {parent.name}</td><br/><br/>
                <td> {parent.mobile}</td><br/><br/>
                <td> {parent.email}</td><br/><br/>
                <td> {parent.city}</td><br/><br/>
                
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

export default ViewParents;