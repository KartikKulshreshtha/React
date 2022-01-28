import React, {useState} from 'react'

export default function About(props) {
    // let Mystyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }
    
    // const [Mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let Mystyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'rgb(28 39 48)':'white',
    }
    

    return (
        <div className='container my-5'>
            <div class="accordion" style={{color: props.mode === 'dark'?'white':'black'}} id="accordionExample">
                <h1>About Us</h1>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button style={Mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div style={Mystyle} class="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button style={Mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Accordion Item #2</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div style={Mystyle} class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button style={Mystyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Accordion Item #3</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div style={Mystyle} class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
