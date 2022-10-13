export default function auth(state = {
    number:0,
    user:{}
}, action){

    if(action.type === 'PLUS'){
        return {
            ...state,
            number:state.number+action.payload
        }
    }
    if(action.type === 'MINUS'){
        return {
            ...state,
            number:state.number-action.payload
        }
    }
    if(action.type === 'LOGIN'){
        return {
            ...state,
            user:action.payload
        }
    }
    if(action.type === 'LOGOUT'){
        return {
            ...state,
            user:{}
        }
    }
    if (action.type === 'UPDATE_USER') {
        return {
            ...state,
            user:
                action.payload,

        };
    }

    return state;
}