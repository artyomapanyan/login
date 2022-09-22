import {useState} from "react";
import "./Image1.css"


function Image1 ({onAdd}) {
    const [textForm, setTextForm] = useState("");

    const changeText = (e) => {
        setTextForm(e.target.value)
        new Date().toLocaleString()
    }

    const enterSubmit = (e) => {
        e.preventDefault();
        onAdd(textForm)
        setTextForm("")
    }
    return (
        <div className="div-image1">
            
            <form>
                <textarea className="comments1" value={textForm} onChange = {changeText} />
                <div>
                    <button onClick={enterSubmit}>button</button>
                </div>
                
            </form>
            
        </div>
        
    );
}

export default Image1;