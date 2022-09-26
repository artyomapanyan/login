import {useState} from "react";
import "./Image1.css"
import nkar1 from "./images/nkar1.jpg"
import Image1Text from "./Image1Text";

function Image1 () {
    const [textForm, setTextForm] = useState("");
    const [texts, setTexts] = useState([""]);
    const addText = (textForm) => {
        setTexts([
          ...texts,
          {id : Math.random(),
            coment : textForm,
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
        <div className="div-image1">
            <img src={nkar1} />
            {
                  texts.map((text) => (
                    <Image1Text
                      key={text.id}
                      text={text}
                    />
                  ))
                }
            <form >
                <textarea type="text" className="comments1" value={textForm} onChange = {changeText} />
                <div>
                    <button onClick={enterSubmit}>button</button>
                </div>
                
            </form>
            
        </div>
        
    );
}

export default Image1;