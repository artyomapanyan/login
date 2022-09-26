import {useState} from "react";
import "./Image2.css"
import nkar2 from "./images/nkar2.jpg"
import Image1Text from "./Image1Text";

function Image2 () {
    const [textForm, setTextForm] = useState("");
    const [texts, setTexts] = useState([""]);
  


  const addText = (textForm1) => {
    setTexts([
      ...texts,
      {id : Math.random(),
        coment : textForm1,
        date: new Date().toLocaleString()
      }]);   
  }

    const changeText = (e) => {
        setTextForm(e.target.value)
        new Date().toLocaleString()
    }

    const enterSubmit = (e) => {
        e.preventDefault();
        addText(textForm)
        setTextForm("")
    }
    return (
        <div className="div-image2">
            <img src={nkar2} />
            {
                  texts.map((text) => (
                    <Image1Text
                      key={text.id}
                      text={text}
                    />
                  ))
                }
            <form onSubmit={enterSubmit}>
                <textarea className="comments2" value={textForm} onChange = {changeText} />
                <div>
                    <button onClick={enterSubmit}>button</button>
                </div>
                
            </form>
            
        </div>
        
    );
}

export default Image2;