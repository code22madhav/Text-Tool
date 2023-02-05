import React, {useState} from 'react'

export default function Textarea(props) {
  const handleUpClick=()=>{
    let upcasetxt=text.toUpperCase();
    setText(upcasetxt);
    props.showAlert("Converted to upper case", "success");
  }
  const handleloClick=()=>{
    let locasetxt=text.toLowerCase();
    setText(locasetxt);
    props.showAlert("Converted to lower case", "success");
  }
  const handleClearClick=()=>{
    setText("");
    props.showAlert("Text area cleared", "success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Coppied to clipboard", "success");
  }

  const onChange=(event)=>{
    setText(event.target.value);
  }

  const [text, setText]= useState("");
  return (
    <>
    <div>
        <div className="mb-3">
          <h1 className={`text-${props.mode==="light"?'black':'white'}`}>Enter Your Text To Analyize</h1>
          <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'#0C2D48', color:props.mode==='light'?'black':'white'}} value={text} onChange={onChange} rows="8"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleloClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mt-3" onClick={handleClearClick}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleCopy}>Copy</button>
        </div>
    </div>
    <div className={`container text-${props.mode==="light"?'black':'white'}`}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((word)=>{return word.length!==0}).length} Words and {text.length} Characters</p>
    </div>
    </>    
  )
} 