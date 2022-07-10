import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#084298';
      showAlert("Dark mode has been enabled", "succes");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "succes");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/React-app' exact='true' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter,
                     Remove extra Spaces" mode={mode} />}></Route>
            <Route path='/about' element={<About mode={mode}></About>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
