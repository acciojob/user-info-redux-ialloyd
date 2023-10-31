import { USER_NAME, USER_EMAIL } from "../actions/actionTypes";

const initialState = {
    name: '',
    email: ''
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case USER_NAME: return { ...state, name: action.payload }
        case USER_EMAIL: return { ...state, email: action.payload }
        default: return state
    }

}

export default userReducer;