import React , {useState} from 'react'

export default function Textform(props) {
    const [text,settext]=useState("")
    

    const handleclick=()=>{
        console.log("Button was clicked")
        let newtext=text.toUpperCase()
        settext(newtext)
    }
    const handleclickl=()=>{
        console.log("Button was clicked")
        let newtext=text.toLowerCase()
        settext(newtext)
    }
    const handlechange=(event)=>{
        settext(event.target.value)
    }
    const handleclickc=(event)=>{
        settext("")
    }
    const handleclickcopy=(event)=>{
        navigator.clipboard.writeText(text);
        alert("Text is copied");
        console.log("copy")
    }
  return (
    
    <div>
        
     <h2 style={{color:props.mode==="black"?"white":"grey"}}>{props.heading}</h2>
<div className="mb-4">

<textarea className="form-control" id="mybox" rows="10" value={text} onChange={handlechange} style={{backgroundColor:props.mode==="light"?"white":"grey"}}></textarea>
</div>
<button className="btn btn-primary mx-2 mb-4" onClick={handleclick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-2 mb-4" onClick={handleclickl} id="btn">Convert to Lowercase</button>
<button className="btn btn-primary mx-2 mb-4" onClick={handleclickc} >Clear text</button>
<button className="btn btn-primary mx-2 mb-4" onClick={handleclickcopy} >Copy text</button>
<div className='container mb-4' style={{color:props.mode==="light"?"black":"grey"}}>
<h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
<h3 style={{color:props.mode==="light"?"black":"grey"}}>Preview</h3>
<div className='container mb-4'>
    
    <p1 style={{color:props.mode==="light"?"black":"grey"}}>{text.length>0?text:"Enter text above to preview here"}</p1>
</div>
    </div>
  )
}
