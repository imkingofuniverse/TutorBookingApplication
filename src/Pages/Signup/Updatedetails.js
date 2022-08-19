import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
//import TxtField from "./TxtField";
import './Updatedetails.css';
import axios from "axios";
import { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";

/*const ui = (
  <div>
     <h1>Sign up</h1>
  <div className="sup">
   
    <Form id="signup">
      <TxtField label="Customer Id : " name="customerId" type="number" /><br/>
      <TxtField label="User Name : " name="userName" type="text" /><br/>
      <TxtField label="Mobile Number : " name="mobileNumber" type="number" /><br/>
      <TxtField label="Email : " name="email" type="email" /><br/>
      <TxtField label="Password : " name="password" type="password" /><br/>
      
      <TxtField
        label="Confirm Password : "
        name="confirmPassword"
        type="password"
      /><br/>
      <div className="submitbutton">
      <button type="submit">Register</button>
      </div>
    </Form>
    </div>
  </div>
);

function RegisterUser(values) {
  const userDetails = values;
  console.log(userDetails);
}

const Sup = () => {
  const validate = Yup.object({
    customerId: Yup.number().min(6, " mobile number should be 10 digits").required(),
    userName: Yup.string().required(),
    mobileNumber: Yup.number().required(),
    email: Yup.string().email().required(),
    
    password: Yup.string()
      .min(6, " password should be min 6 characters")
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password should match")
      .required(),
  });
  return (
    <Formik
      initialValues={{
        customerId: "",
        userName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        RegisterUser(values);
      }}
    >
      {(formik) => <div>{ui}</div>}
    </Formik>
  );
};

export default Sup; */

function Updatedetails(){
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[mobile,setMobile]=useState("");
  const[tutorId,setTutorId]=useState("");
  const[email,setEmail]=useState("");
  const[name,setName]=useState("");
  const[schoolName,setSchoolName]=useState("");
  const[qualification,setQualification]=useState("");
  const[subject,setSubject]=useState("");
  const[city,setCity]=useState("");
  const navigate = useNavigate();
  function usersignup(){
    let resbody={
      tutorId:tutorId,
      username : username,
      password:password,
      mobile: mobile,
      email: email,
      name: name,
      schoolName: schoolName,
      qualification: qualification,
      subject: subject,
      city: city,
    }
    axios.put("http://localhost:9090/tutor/updateTutor",resbody).then((res)=>console.log(" Registration successfull"));
  }
  function registrationdone() {
    navigate("/detailsupdated");
    usersignup();
  }
  return(
    <div>
      <h1>Update Details</h1>
    
    <div className="supcc">
      
      <label>Customer Id : </label>
      <input label="Customer Id : " name="tutorId" type="number" onChange={(e)=>{setTutorId(e.target.value)}} />
      <br/>
      <br/>
      <label>User Name : </label>
      <input label="User Name : " name="username" type="text" onChange={(e)=>{setUsername(e.target.value)}} />
      <br/>
      <br/>
      <label>Name : </label>
      <input label="Name : " name="name" type="text" onChange={(e)=>{setName(e.target.value)}} />
      <br/>
      <br/>
      <label>Mobile Number : </label>
      <input label="Mobile Number : " name="mobile" type="number" onChange={(e)=>{setMobile(e.target.value)}}/>
      <br/>
      <br/>
      <label>Email : </label>
      <input label="Email : " name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>
      <br/>
      <label>School Name : </label>
      <input label="School Name : " name="schoolName" type="text" onChange={(e)=>{setSchoolName(e.target.value)}}/>
      <br/>
      <br/>
      <label>Qualification : </label>
      <input label="Qualification : " name="qualification" type="text" onChange={(e)=>{setQualification(e.target.value)}}/>
      <br/>
      <br/>
      <label>Subject : </label>
      <input label="Subject : " name="subject" type="text" onChange={(e)=>{setSubject(e.target.value)}}/>
      <br/>
      <br/>
      <label>City : </label>
      <input label="City : " name="city" type="text" onChange={(e)=>{setCity(e.target.value)}}/>
      <br/>
      <br/>
      <label>Password : </label>
      <input label="Password : " name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>    
      <br/>
      <br/>
      <div className="submitbutton">
       <button type="submit" onClick={registrationdone}>Register</button>
      </div>
    </div>
    </div>
  );
}




export default Updatedetails;