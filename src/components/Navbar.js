import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
         
          
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        
      </div>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==="light"?"black":"white"}}> {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
</div>
    </div>
  </nav>
    
  )
}

Navbar.defaultProps={
  title: "Set title here",
  about: "About us"
}