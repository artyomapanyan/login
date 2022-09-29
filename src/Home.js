import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"

function Home() {
  const [valueLogin, setValueLogin] = useState("");
  const [valuePassword, setValuePassword] = useState("");
   
    let login = "artyom";
    let password = "apanyan";
    
    let aaa = (e) => {
      setValuePassword(e.target.value)
    }

    let bbb = (e) => {
      setValueLogin(e.target.value)
    }

    let qqq = (e) =>  {
      if (valueLogin !== login) {
        e.preventDefault();
        alert("неправильное имя пользователя или пароль") 
      } else if (valuePassword !== password) {
        e.preventDefault();
        alert("неправильное имя пользователя или пароль") 
      }
    }

    return (
      <div className="main">
        <main>
          <form onSubmit={qqq}>
            
               Login <input type="login" onChange={bbb}/>
               Password <input type="text"  onChange={aaa} />
                <Link to="/about" className="link-login" onClick={qqq}>войти</Link>
            
          </form>
        </main>
      </div>
    );
  }

  export {Home};