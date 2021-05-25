import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsZone from './Components/DoctorsZone/DoctorsZone';
import Dashboard from './Components/Dashboard/Dashboard';
import Patients from './Components/Patients/Patients';
import Prescription from './Components/Prescription/Prescription';
import Settings from './Components/Settings/Settings';
import NotFound from './Components/NotFound/NotFound';
import Community from './Components/Community/Community';
// import SignupScreen from './Components/SignupScreen/SignupScreen';
// import Login from './Components/Login/Login';
import Video from './Components/VideoCall/Video'
import UserDetail from './Components/UserDetails/UserDetail';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
// import PetZone from './Components/PetZone/PetZone';
// import PetZone1 from './Components/PetZone/PetZone1';
// import golden from './Components/PetZone/golden';
import LoginDoc from './Components/Login/LoginDoc';
import { useStateValue } from './StateProvider';

function App() {

    const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <Router>
        <Switch>
      
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctorsZone">
            <DoctorsZone></DoctorsZone>
          </Route>
          <Route path="/community">
            <Community></Community>
          </Route>
          <Route path="/community">
            <Community></Community>
          </Route>
          <Route path="/userinfo/" component = {UserDetail} />
          
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path= "/video">
            <Video></Video>
          </Route>
          <Route path="/patients">
            <Patients></Patients>
          </Route>
          <Route path="/prescription">
            <Prescription></Prescription>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/logindoctor">
            <LoginDoc></LoginDoc>
          </Route>
         
          {/* <Route path="/golden">
            <golden></golden>
          </Route> */}
          {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
