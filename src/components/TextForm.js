import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "succes");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "succes");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "succes");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "succes");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Eextra spaces removed!", "succes");
  }
  const [text, setText] = useState('');
  //text="new text";//Wrong way to change the state
  //setText("new text");//Correct way to change the state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#084298' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange=
          {handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 
          '#173768' : 'white', color: props.mode === 'dark' ? 'white' : '#084298' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#084298' }}>
        <h2>your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  )
}