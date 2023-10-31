import { USER_NAME, USER_EMAIL } from "./actionTypes";


export const userName = (name) => {

    return {

        type: USER_NAME,
        payload: name

    }

}

export const userEmail = (email) => {

    return {

        type: USER_EMAIL,
        payload: email
    }
}