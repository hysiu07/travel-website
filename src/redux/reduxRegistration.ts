const ADD_USER: string = 'user/ADD_USER'

const INITIAL_STATE_REGISTERED = {
    users: [{
        name: 'Daniel',
	    email: 'hysiu07@gmail.com',
	    password: '11111!',
        confirmPassword: '11111!',
    }]

}
export const addUser = (user : any) => ({ type: ADD_USER, payload: user })


export const reducerUserRegistration = (state = INITIAL_STATE_REGISTERED, action: any) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                 users: [...state.users, action.payload]
           }
        default:
            return state
    }
}