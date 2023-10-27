import { combineReducers } from "@reduxjs/toolkit";
import { reducerUserRegistration } from "./reduxUsersRegistration/redux";

export const rootReducers = combineReducers({
 userRegistered: reducerUserRegistration
})
