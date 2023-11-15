import { combineReducers } from "@reduxjs/toolkit";
import { reducerUserRegistration } from "./redux/reduxRegistration";
import { reducerUserInfo } from "./redux/reduxUserInfo";
import { reducerShowForecast } from "./redux/reduxShowForecast";

export const rootReducers = combineReducers({
    userRegistered: reducerUserRegistration,
    userInfo: reducerUserInfo,
    showForecast: reducerShowForecast
})
