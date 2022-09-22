import {useState} from "react";
import "./Image2.css"


function Image2 ({onAdd}) {
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
        <div className="div-image2">
            
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