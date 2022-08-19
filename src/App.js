/*import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import DriverLogin from "./Pages/Login/DriverLogin";
import Signup from "./Pages/Signup/Signup";
import Failure from "./Pages/Failure/failure";
import Home from "./Pages/Home/Home";
import CabComponent from "./Pages/Home/CabComponent";
import ViewCabs from "./Pages/Home/ViewCabs";
import Sup from "./Pages/Signup/Sup";

import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
//import LoginAs from "./Pages/Login/LoginAs";
import Background from "./Pages/Home/Background";

function App() {
  return (
    <div>
      
      <AppBar style={{ backgroundColor:'black'}} position="static">
      <Toolbar>
      <Typography variant="h6" style={{fontFamily:'Montserrat,sans-serif'}}>
        <h3 font face="Arial">Online Tutor</h3>
        
        <p id="tagline">Your one-stop destination for learning and exploring</p>
      </Typography>
      </Toolbar>
      </AppBar>
    
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/sup" element={<Signup />} />
          <Route path="/" element={<Background />} />
          

        </Routes>
      </BrowserRouter>

      
      </div>

    </div>
  );
}

export default App; */

import './App.css';

import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Background from "./Pages/Home/Background";
import Ground from './Pages/Home/Ground';
import Login from './Pages/Login/Login';
import Sup from './Pages/Signup/Sup';
import Failure from './Pages/Failure/failure';
import TutorFunctions from './Pages/Tutor/TutorFunctions';
import Updatedetails from './Pages/Signup/Updatedetails';
import RegistrationDone from './Pages/Signup/RegistrationDone';
import ViewTutors from './Pages/Tutor/ViewTutors';
import DetailsUpdated from './Pages/Signup/DetailsUpdated';
import Pground from './Pages/Home/Pground';
import Aground from './Pages/Home/Aground';
import Adminlogin from './Pages/Login/Adminlogin';
import Parentlogin from './Pages/Login/Parentlogin';
import ParentFunctions from './Pages/Parent/ParentFunctions';
import AdminFunctions from './Pages/Admin/AdminFunctions';
import PViewTutors from './Pages/Parent/PViewTutors';
import TutorBooked from './Pages/Parent/TutorBooked';
import PSup from './Pages/Parent/PSup';
import PUpdatedetails from './Pages/Parent/PUpdatedetails';
import ViewParents from './Pages/Parent/ViewParents';
//import Background from "./Pages/Home/Background";

function App() {
  return (
    <div className="App">

      <AppBar style={{ backgroundColor:'black'}} position="static">
      <Toolbar>
      <Typography variant="h6" style={{fontFamily:'Montserrat,sans-serif'}}>
        <h3 font face="Arial">Online Tutor Application </h3>
        
        <p id="tagline">Your one-stop destination for learning and exploring...</p>
      </Typography>
      </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Ground />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" element={<Sup />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/tutorfunctions" element={<TutorFunctions />} />
          <Route path="/updatedetails" element={<Updatedetails />} />
          <Route path="/registrationdone" element={<RegistrationDone />} />
          <Route path="/viewtutors" element={<ViewTutors />} />
          <Route path="/detailsupdated" element={<DetailsUpdated />} />
          <Route path="/p" element={<Pground />} />
          <Route path="/a" element={<Aground />} />
          <Route path="/adminlogin" exact element={<Adminlogin />} />
          <Route path="/parentlogin" exact element={<Parentlogin />} />
          <Route path="/parentfunctions" exact element={<ParentFunctions />} />
          <Route path="/adminfunctions" exact element={<AdminFunctions />} />
          <Route path="/pviewtutors" exact element={<PViewTutors />} />
          <Route path="/tutorbooked" exact element={<TutorBooked />} />
          <Route path="/parentsignup" exact element={<PSup />} />
          <Route path="/parentupdatedetails" exact element={<PUpdatedetails />} />
          <Route path="/viewparents" element={<ViewParents />} />
          


          

        </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;


 /*     <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Background />} />
          

        </Routes>
      </BrowserRouter>  */


      /*

      <Route path="/parentsignup" exact element={<PSup />} />
          <Route path="/parentupdatedetails" exact element={<PUpdatedetails />} /> */