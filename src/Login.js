import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Image1 from "./Image1";
import Image2 from "./Image2";

function Login() {
  
    return (
      <div className="login-div">
        <div className="div-link-home">
          
          <Link className="link-home" to="/">выйти</Link>
        </div>
        <div className="div-nkarner">
          <div className="div-nkar1">
              
              <div className="commentText">
                
              </div>

              <Image1 />
            </div>
            <div className="div-nkar2">
              

              <div className="commentText">
              
              </div>
              <Image2 />
            </div>
       </div>
      </div>
    );
  }

  export {Login};