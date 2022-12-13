import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {

        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upper case", "success")

    }
    const handleLoClick = () => {

        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lower case", "success")

    }
    const handleCopyClick = () => {

        navigator.clipboard.writeText(text);

        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleSaveClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        props.showAlert("Text file downloaded", "success")
    }

    const handleExtraSpaceClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    const handleClearClick = () => {
        setText('')

    }
    const handleOnChange = (event) => {

        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#04173d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to LowerCase</button>
                
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaceClick}>Remove extra spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>copy the text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleSaveClick}>Save text file</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear the text</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} minutes require to read it</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
