// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#282c34'
      showAlert("Dark mode has been enabled", 'success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", 'primary');
    }
  
    // else if(cls === 'primary'){
    //   setMode('primary')
    //   document.body.style.backgroundColor = 'blue'
    // }
    // else if(cls === 'warning'){
    //   setMode('warning')
    //   document.body.style.backgroundColor = 'yellow'
    // }
    // else if(cls === 'success'){
    //   setMode('success')
    //   document.body.style.backgroundColor = 'green'
    // }
    // else if(cls === 'danger'){
    //   setMode('danger')
    //   document.body.style.backgroundColor = 'red'
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor = 'white'
    //   showAlert("Light mode has been enabled", 'primary');
    // }
    
  }

  return (
    <>
    <Router>
      <NavBar title="Converters" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}>
          </Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
