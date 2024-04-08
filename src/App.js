
import './App.css';
import About from './components/About';
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
  
  
  return (
    <>
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
    </>
  );
}

export default App;
