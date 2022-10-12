export default function registrationState(state = {
    users:[]
}, action){

    if(action.type === 'register'){
        return {
            ...state,
            users: [...state.users,
            action.payload
            ]
        }
    }


    return state;
}