import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState ('Enter text here...')
    const handelUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
            <div className='container mb-3'>
            <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handelUpClick} >Convert to Uppercase</button>
                {/* <button className="btn btn-danger">Clear</button> */}
            </div>
        </>
    )
}

export default TextForm