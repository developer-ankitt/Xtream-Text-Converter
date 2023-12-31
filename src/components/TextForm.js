import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')

    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handelCopyClick = () => {
        let text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handelExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const hadelClearClick = () => {
        let newText = "";
        setText(newText)
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="textbox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handelUpClick} >Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelLoClick} >Lowerercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelCopyClick} >Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaceClick} >Remove Extra Space</button>
                <button className="btn btn-danger mx-1 my-1" onClick={hadelClearClick} >Clear</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Here is the summary</h2>
                <p>{text.split(" ").length} words & {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm