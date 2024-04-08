import React from 'react'
import '../App.css';


export default function About(props) {
    
    let mystyle={ color: "white",
    backgroundColor:"black"}
    
        if(props.mode==="dark"){
            mystyle={
                color: "white",
                backgroundColor:"#030361"
    
            }
            
        }
        else{
            mystyle={
            color: "black",
            backgroundColor: "white"
            
        }
        
    }
    
  return (
    <div className="right-container">
      <div className="container my-3" style={mystyle} id="accordionExample">
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Introduction
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Texty is a versatile project developed using React, aimed at simplifying various text manipulation tasks. Whether it's formatting, analyzing, or transforming text, TextUtils provides an intuitive interface for users to perform these actions effortlessly. Leveraging React's component-based architecture, the project ensures modularity, scalability, and enhanced user experience.
      </div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Feature
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Key Features</strong> TextUtils is structured into reusable components, each responsible for specific functionalities. For instance, the formatting feature is handled by a separate component, while text analysis functionalities reside within another. This modular approach simplifies development, debugging, and maintenance.
      </div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        User-friendly
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The user interface is designed to be intuitive and user-friendly, with clear navigation and descriptive labels for each functionality. Additionally, error handling and validation mechanisms are in place to provide a smooth user experience
      </div>
    </div>
  </div>
  
</div>
 
 <div className="contact-details" style={{ color: mystyle.color }}>
                <h4>Contact Details</h4>
                <p>Email: khajamoinuddinsameer@gmail.com</p>
                
                
            </div>

    </div>
  )
}
