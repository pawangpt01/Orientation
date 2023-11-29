import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/dashboard';
import Abouts from './components/dashboard/About';
import Project from './components/dashboard/Project';
import Questionnaire from './components/dashboard/Questionnaire';
import WizardComponent from './components/dashboard/joining_kit/WizardComponent';
import FloorMap from './components/dashboard/FloorMap';
import SpineHr from './components/dashboard/SpineHr';
import Dynamic from './components/Dynamic';
import JoiningKitUpload from './components/dashboard/joining_kit/JoiningKitUpload';


function App() {
   
return <>
  <Routes>
    <Route path={"/"}  element={<Login/>} ></Route>
    <Route path={"/"}  element={<Login/>} ></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    {/* <Route path='dashboard/joining/application' element={<Application/>}></Route> */}
    <Route path='/dashboard/about' element={<Abouts/>}> </Route>
    <Route path='/dashboard/project' element={<Project/>}></Route>
    <Route path='/dashboard/questionnaire' element={<Questionnaire/>}></Route>
    <Route path='/dashboard/joining/wizard' element={<WizardComponent/>}></Route>
    <Route path='/dashboard/floor_map' element={<FloorMap/>}></Route>
    <Route path='/dashboard/spine_hr' element={<SpineHr/>}></Route>
    <Route path='/dynamic' element={<Dynamic/>}></Route>
    <Route path={"/dashboard/joining/wizard/upload/:id"}  element={<JoiningKitUpload/>} ></Route>
  </Routes>
  {/* <Login></Login> */}
  </>
}

export default App;
