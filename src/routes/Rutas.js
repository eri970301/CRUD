import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Principal from '../pages/Principal';


function Rutas() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/principal' element={<Principal />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
