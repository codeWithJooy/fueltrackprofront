import { USER_SIGNUP } from "../actionTypes/userTypes";

const initialize={
    ownerId:"",
    email:"",
    setup:false,
}

const userReducer=(state=initialize,action)=>{
    const payload=action.payload;

    switch(action.type){
        case USER_SIGNUP:
            return{
                ownerId:payload.ownerId,
                email:payload.email
            }
        default:
            return state;    
    }
}

export default userReducer;