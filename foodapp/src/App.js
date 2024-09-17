import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Main from './Components/Main'



function App() {
  return (
    <div>
      
      <div> <Main></Main></div>
      <div> <Outlet></Outlet></div>
    
    

 
    </div>
  );
}

export default App;
