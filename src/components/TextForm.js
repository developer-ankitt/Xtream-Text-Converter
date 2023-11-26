import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState ('Enter text here...')

    const handelUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handelOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
            <div className='container my-3'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUpClick} >Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handelLoClick} >Lowerercase</button>
                <button className="btn btn-danger mx-2">Clear</button>
            </div>

            <div className="container my-3">
                <h2>Here is the summary</h2>
                <p>{text.split(" ").length} words & {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm