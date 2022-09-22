import { useState } from "react";
import { Link } from "react-router-dom";
import nkar1 from "./images/nkar1.jpg"
import nkar2 from "./images/nkar2.jpg"
import "./Login.css";
import Image1Text from "./Image1Text";
import Image1 from "./Image1";
import Image2Text from "./Image2Text";
import Image2 from "./Image2";

function Login() {

  const [texts, setTexts] = useState([""]);
  const [texts1, setTexts1] = useState([""]);
  


  const addText = (textForm) => {
    setTexts([
      ...texts,
      {id : Math.random(),
        coment : textForm,
        date: new Date().toLocaleString()
      }]);   
  }

  const addText1 = (textForm1) => {
    setTexts1([
      ...texts1,
      {id : Math.random(),
        coment : textForm1,
        date: new Date().toLocaleString()
      }]);   
  }

  
  

    return (
      <div className="login-div">
        <div className="div-link-home">
          
          <Link className="link-home" to="/">выйти</Link>
        </div>
        <div className="div-nkarner">
          <div className="div-nkar1">
              <img src={nkar1} />
              <div className="commentText">
                {
                  texts.map((text) => (
                    <Image1Text
                      key={text.id}
                      text={text}
                    />
                  ))
                }
              </div>

              <Image1 onAdd={addText} />
            </div>
            <div className="div-nkar2">
              <img src={nkar2} />

              <div className="commentText">
              {
                  texts1.map((text) => (
                    <Image2Text
                      key={text.id}
                      text={text}
                    />
                  ))
                }
              </div>
              <Image2 onAdd={addText1} />
              {/* <textarea className="comments2"></textarea>
              <button>button</button> */}
            </div>
       </div>
          
        
      </div>
    );
  }

  export {Login};