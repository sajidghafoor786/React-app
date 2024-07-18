import React, { useState } from 'react'


export default function TextForm(props) {
  // UperCase Function 
  const handleClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  // UperCase Function
  const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  // Onchange Function
  const handleonChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>

      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClick}>Convert To UperCase </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowCase </button>
      </div>
      <div className="container">
        <h2>Text Summary Here</h2>
        <p>{text.split(" ").length} Word And {text.length} Character </p>
        <p>{0.008 * text.split(" ").length} One Minte Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
