import { combineReducers } from "@reduxjs/toolkit";
import { reducerUserRegistration } from "./redux/reduxRegistration";
import { reducerUserInfo } from "./redux/reduxUserInfo";

export const rootReducers = combineReducers({
    userRegistered: reducerUserRegistration,
    userInfo: reducerUserInfo
})
