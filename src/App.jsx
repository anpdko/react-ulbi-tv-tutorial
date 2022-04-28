import React from "react";
import './App.css'
import {BrowserRouter, NavLink} from 'react-router-dom'
import Routers from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="main-nav">
          <ul className="main-ul">
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/tutorial">Обечение</NavLink></li>
          </ul>
        </nav>
        <Routers/>
      </div>
    </BrowserRouter>
  );
}

export default App;
