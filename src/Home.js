import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"

function Home() {
  const [valuePassword, setValuePassword] = useState("");
   
    let login = "artyom";
    let password = "apanyan";
    
    let aaa = (e) => {
      setValuePassword(e.target.value)
    }

    let qqq = (e) =>  {
      if (valuePassword !== login && valuePassword !== password) {
        e.preventDefault();
        alert("неправильное имя пользователя или пароль")
        
      }
    }

    return (
      <div className="main">
        <main>
          <form onSubmit={qqq}>
            
               Login <input type="text" onChange={aaa}/>
               Password <input type="password"  onChange={aaa} />
                <Link to="/about" className="link-login" onClick={qqq}>войти</Link>
            
          </form>
        </main>
      </div>
    );
  }

  export {Home};