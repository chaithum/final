import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminSignup from './components/adminsignup';
import AdminLogin from './components/adminlogin';
import Adminhome from './components/adminhome';
import AdminForgetPassword from './components/adminforgetpassword';
import UserLogin from './components/userlogin';


function App() {
  return (
    <React.Fragment>
      <Routes>
          <Route path='/adminsignup' element={<AdminSignup/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          <Route path='/adminforgetpassword' element={<AdminForgetPassword/>}></Route> 
          {/* <Route path='/adminhome' element={<Adminhome/>}></Route> */}
          <Route path='/userlogin' element={<UserLogin/>}></Route> 
      </Routes>
    </React.Fragment>
 
  );
}

export default App;
