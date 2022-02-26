import React , {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange =(event) => {
     
        setText(event.target.value)
    }

    const clickedup = () => {

       let  newText = text.toUpperCase()
       setText(newText);
       props.showAlert(" Converted into UpperCase", "success")


    }
    const clickedlow = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
        props.showAlert(" Converted into lowerCase", "success")}

    const clearedText = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" Text has been cleared", "success")
    }


    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Copied", "success")
    }

    const handleRemove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra Spaces has been Removed ","success")
    }

    

  return (

    <>
    <div className="container my-2">
        <label htmlFor="myBox" className="form-label my-3" style={{color:props.mode==="light"? "black": "white"}}><h3>Text Utils- Character Counter | Words Counter | Remove Extra Spaces</h3></label>
        <textarea className="form-control" placeholder='Type Here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==="dark"? "#303f42": "white", color: props.mode==="light"? "black": "white"}}  id="myBox" rows="8"></textarea>
    
    </div>

        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickedup}>UpperCase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clickedlow}>LowerCase</button>        
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearedText}>Clear Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemove}>Remove Spaces</button> 



    <div className="container" style={{color: props.mode ==="light"? "black": "white"}} >
        <h1>Your text summery</h1>
        <p> {text.split(/\s/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read </p>

        <h1>Preview:</h1>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
   
</>
  )
}