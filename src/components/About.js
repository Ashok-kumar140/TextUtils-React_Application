import React from 'react'


export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#04173d' : 'white',
       
    }

    return (
        <div className='container' style={myStyle} >
            <h1 className='my-3' style={ {textAlign: 'center'}}>About Us </h1>
            <div className='container mb-5'>TextUtils gives you a way to analyze your text quickly and effeciently. Apart from counting words and characters, our utility can help you to convert text from Uppercase to LowerCase and vice versa, removing extra spaces from text, provide option of copy the whole text into clipboard and also provide a downloadable file of analysed text. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. In the text summary you can see the average speaking and reading time for your text </div>
            <h3 style={ {textAlign: 'center'}}>FAQ'S Related to TextUtils</h3>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                           <strong> Q:  &nbsp;Can we find out the required average time for reading the given text?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body" style={myStyle}>
                           <strong>A:&nbsp;</strong> <strong>Yes,&nbsp;</strong>Our TextUtils utility provide the facility of reading time of any text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
                            <strong>Q:  &nbsp; What is TextUtils?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body" style={myStyle}>
                        <strong>A:&nbsp;</strong>TextUtils is a word counter and character counting utility which can ber used in manipulating text in the way we want. You can remove extra spaces,copy the manipulated text as well as convert your text from upperCase to lowerCase and lowerCase to upperCase.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                            <strong>Q:  &nbsp;How to find the word count using TextUtils tool?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body" style={myStyle}>
                        <strong>A:&nbsp;</strong> Type your text into the space, and the word count will be updated as you type. Alternatively, copy and paste your text into the space, and your word count will be provided.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour" style={myStyle}>
                            <strong>Q:  &nbsp;Is Grammarly a free service?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body" style={myStyle}>
                        <strong>A:&nbsp;</strong><strong>Yes,</strong> &nbsp;absolutely! You can choose to use its grammar checking services for free.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive" style={myStyle}>
                            <strong>Q:  &nbsp;What is the word count for 1 page?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                        <div className="accordion-body" style={myStyle}>
                        <strong>A:&nbsp;</strong>A good estimate of the word count for font size 12 pt and single spaced in 1 page is 500 words.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix" style={myStyle}>
                            <strong>Q:  &nbsp;How to find the character count using TextUtils tool?</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                        <div className="accordion-body" style={myStyle}>
                        <strong>A:&nbsp;</strong>Type your text into the space, and the character count will be updated as you type. Alternatively, copy and paste your text into the space, and your character count will be provided.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
