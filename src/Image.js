import {useState} from "react";
import "./Image1.css"
import Image1Text from "./Image1Text";

function Image ({image}) {
    const [textForm, setTextForm] = useState("");
    const [texts, setTexts] = useState([]);
    const [updateComment,setUpdateComment] = useState(false)

    
    const addText = (textForm) => {
        setTexts([
          ...texts,
          {id : Math.random(),
            coment : textForm,
            date: new Date().toLocaleString()
          }]);   
      }
      const updateText = (textForm)=>{
        setTexts(texts.map(function(comment) {
          if (updateComment.id === comment.id) {
            comment.coment = textForm;
            comment.date = new Date().toLocaleString();
          }
          return comment;
        }))
      }

    const changeText = (e) => {
        setTextForm(e.target.value)
    }

    const enterSubmit = (e) => {
        e.preventDefault();
        if(updateComment){
          updateText(textForm)
        }else{
          addText(textForm)
        }
          
        setTextForm("")
        setUpdateComment(false);
        
    }
    const handleInitUpdate = (text)=>{
      setUpdateComment(text)
      setTextForm(text.coment)

    }

    const handleDelete = (text) => {
      setTexts(texts.filter(function(textId) {
        return textId.id !== text.id
      }))
    }



    return (
        <div className="div-image1">
            <img src={image} alt={'image'} />
            {
                  texts.map((text) => (
                    <Image1Text
                      key={text.id}
                      text={text}
                      handleInitUpdate={handleInitUpdate}
                      handleDelete={handleDelete}
                    />
                  ))
                }
            <form >
                <input type="text" className="comments1" value={textForm} onChange = {changeText} />
                <div>
                    <button onClick={enterSubmit}>{updateComment?'Update':'Add'}</button>
                </div>
                
            </form>
            
        </div>
        
    );
}

export default Image;