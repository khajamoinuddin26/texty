
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [smode,setmode]=useState("light")
  const tooglem=()=>{
    if(smode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="black"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
    }
  }
  
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={smode} toggleMode={tooglem} />
      <div className="container">
      
      </div>
      <div className='container'>
        
      </div>
      
       <Switch>
          <Route exact path="/about">
            <About  mode={smode} toggleMode={tooglem}/>
          </Route>
          
          <Route exact path="/">
          <Textform heading="Enter to analyze text" mode={smode}/>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
