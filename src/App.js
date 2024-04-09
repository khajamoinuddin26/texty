
import './App.css';
import About from './components/About';
import darkBackgroundImage from './assets/darkbackg.png';
import lightBackgroundImage from './assets/whitebackg.png';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react'
import { Analytics } from "@vercel/analytics/react"
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
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.documentElement.style.margin = 0;
  document.documentElement.style.padding = 0;
  
  return (
    <>
    <div style={{backgroundImage: `url(${smode === "light" ? lightBackgroundImage : darkBackgroundImage})` , backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
    
    <Router>
      <Navbar title="TheTexty" mode={smode} toggleMode={tooglem} />
      <Analytics/>
      <div className="container">
      
      </div>
      <div className='container'>
        
      </div>
      
       <Switch>
          <Route exact path="/about">
            <About  mode={smode} toggleMode={tooglem}/>
          </Route>
          
          <Route exact path="/">
          <Textform heading="Enter your text for processing" mode={smode}/>
          </Route>
        </Switch>
        </Router>
    </div>
    </>
  );
}

export default App;
