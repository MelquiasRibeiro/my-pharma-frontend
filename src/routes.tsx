import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Login from  './pages/login';
import Register from  './pages/register';



const AppRoutes: React.FC = () => {
  return(
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />        
    </Routes>
  );
}

export default AppRoutes;