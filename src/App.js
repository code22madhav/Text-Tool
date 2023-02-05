import './App.css';
import Navbar from './componet/Navbar';
import About from './componet/About';
import Textarea from './componet/Textarea';
import React, {useState} from 'react';
import Alerts from './componet/Alerts';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  const [mode, setmode]= useState("light");
  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
        setalert({
          msg:message,
          type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success");
    }else{
      setmode("dark");
      document.body.style.backgroundColor="#0C2D48";
      showAlert("Dark mode is enabled","success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Text-Tools" mode={mode} toggle={toggleMode}/>
    <Alerts alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path='/' element={<Textarea mode={mode} showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About mode={mode}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
