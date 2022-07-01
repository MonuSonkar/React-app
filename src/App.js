import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from "./components/About";
import React, { useState } from 'react';
import Alert from './components/Alert';
//import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode 9s enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#084298';
      showAlert("Dark mode has been enabled", "succes");
      document.title = 'TextUtils-Dark Mode';
      setInterval(()=>{
      document.title='TextUtils is Amazing Mode';
       },2000);
       setInterval(()=>{
        document.title='Install TextUtils Now';
       },1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "succes");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
    <>
   {/*<BrowserRouter>*/}
   {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/*<Navbar/> */}
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   <div className="container my-3">
   
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
          {/* /users --> Components 1
          /users/home --> Components 2 */}
      {/*<Routes>*/}
{/*<Route path='/' exact={true} element={*/}<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>{/*}></Route>*/}
{/*<Route path='/about' element={<About></About>}></Route>
</Routes>*/}
        </div>
        {/*</BrowserRouter>*/}
   </>
  );
}

export default App;
