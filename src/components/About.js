// import React , {useState} from 'react'





export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"})

    let myStyle = {
        color: props.mode === "dark"? "white":"black",
        backgroundColor: props.mode === "dark"? "#222b6e":"white",
    }
    
    let internalStyle = {
        backgroundColor: props.mode === "dark"? "#10195c":"white"
    }

    // const [btnText, setBtnText] = useState("enable Dark mode")

    // const toggleStyle= () =>{
    //     if(myStyle.color=== "white"){
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("enable dark mode")
    //     }

    //     else{
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "#10195c"
    //         })
    //         setBtnText("enable light mode")

    //     }
    // }


    return (
            <div className='container my-5' style={{color: props.mode === "dark"? "white":"black"}}>
                    <h1 className='my-2'>About us</h1>
                    <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Contact Us on Facebook.
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={internalStyle}>
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Contact Us on instagram.
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={internalStyle}>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Contact Us on Whatsapp.
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={internalStyle}>
                <div className="accordion-body">
                    <strong> Muhammad Hassan. +92-307-0751356</strong>
                </div>
                </div>
            </div>
            </div>
            {/* <button className="btn btn-primary my-3" type='button' onClick={toggleStyle}>{btnText}</button> */}
                </div>
    )
    }