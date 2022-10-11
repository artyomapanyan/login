import {Link} from "react-router-dom";
import "./Login.css";
import Image from "./Image";
import nkar1 from "./images/nkar1.jpg"
import nkar2 from "./images/nkar2.jpg"

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

                    <Image
                        image={nkar1}/>
                </div>
                <div className="div-nkar2">


                    <div className="commentText">

                    </div>
                    <Image
                        image={nkar2}/>
                </div>
            </div>
        </div>
    );
}

export {Login};