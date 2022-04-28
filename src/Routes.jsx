import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from "./pages/Posts";
import Tutorial from "./pages/Tutorial";

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Posts/>} />
         <Route path="/tutorial" element={<Tutorial/>} />
      </Routes>
   );
};

export default Routers;