import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import registrationState from "../reducers/registrationState";

function EnterParol() {
    let reduxState = useSelector((state) => state)
    console.log(reduxState)
    let dispatch = useDispatch()
    const handleUpdate = (type)=> {
        dispatch({
            type: type,
            payload: 5
        })
    }
    let navigate = useNavigate();

    useEffect(() => {
        if(!reduxState.auth.user.name) {
            navigate("/");
        }
    }, []);

    console.log(reduxState.registrationState)

    const handleLogout = ()=>{
        dispatch({
            type:'LOGOUT',
        })

        navigate("/");
    }


    return(
        <div>

            <p>login  {reduxState.auth.user.name}</p>
            <p>login  {reduxState.auth.user.password}</p>

            <button onClick={handleLogout}>logout</button>

        </div>
    )
}

export {EnterParol}