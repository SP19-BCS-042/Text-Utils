import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";


function App() {


    //for alert messege
    const [alert, setAlert] = useState(null)

    const showAlert = (messege,type) =>{
      setAlert({
          msg: messege,
          type: type
         })

        setTimeout(() => {
          setAlert(null);
        }, 1000);
     
    }



    const [mode, setMode] = useState("light")  

  
  const toggle=() =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(19 25 66)"
      showAlert(" Dark mode is enebled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert(" light mode is enebled", "success")

    }
  }

// const [greenMode, setGreenMode] = useState("light")

// const greenToggle = () => {
//   if(greenMode===("light")){
//     setGreenMode("dark")
//     document.body.style.backgroundColor = "#0d683e"
//     showAlert(" Green mode is enebled", "success")

//   }

//   else{
//     setGreenMode("light")
//     document.body.style.backgroundColor = "white"
//     showAlert(" Green mode is enebled", "success")

//   }

// }

// const [redMode, setRedMode] = useState("light")

// const redToggle = () => {
//   if(redMode=== "light"){
//     setRedMode("dark")
//     document.body.style.backgroundColor = "#751323"
//     showAlert(" Red mode is enebled", "success")

//   }
//   else{
//     setRedMode("light")
//     document.body.style.backgroundColor = "white"
//     showAlert(" Red mode is enebled", "success")

//   }
// }




  return (
  <>
    {/* <Navbar title= "Cosmatics" aboutText="Contact Us" link="About" mode={mode} toggleMode={toggle} greenMode={greenMode} toggleGreenMode={greenToggle} redMode={redMode} toggleRedMode={redToggle}/> */}
    <Navbar  title= "T E X T  U T I L S" aboutText="Contact Us" link="About" mode={mode} toggleMode={toggle}/>

    <Alert alert={alert}/>
       
    <div className="container">

                {/* <TextForm showAlert={showAlert} mode={mode} toggleMode={toggle}/> */}
                <TextForm showAlert={showAlert} mode={mode} toggleMode={toggle}/>
               
                {/* <About mode={mode}/> */}
                {/* <Sami/> */}
    </div>
    </>
    );

}

export default App;