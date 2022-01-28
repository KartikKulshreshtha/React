import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case", 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // These both the below functions are for exercise
    const handleClear = () => {
        setText('')
        props.showAlert("Text Has been Removed", 'success')
    }

    const handleCapatalize = () => {
        let first = text[0]
        let capatilize = first.toUpperCase()
        let next = text.slice(1, text.length)
        let full = capatilize + next
        setText(full)
        props.showAlert("First word has been capitalized", 'success')
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(39 49 58)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleClear}>Clear all the text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleCapatalize}>Capatalize your first word</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>
                <p>{text.length === 0? '0':0.008 * text.split(" ").length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Enter something in the textarea above to preview it here"}</p>
            </div>
        </>
    );
}
