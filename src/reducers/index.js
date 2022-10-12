import { combineReducers } from 'redux';
import auth from "./auth";
import registrationState from "./registrationState";

export default combineReducers({
    auth, registrationState
})
