import {applyMiddleware, combineReducers, compose, createStore} from "@reduxjs/toolkit";
import {todoReducer} from "./todo-reducer";
import thunkMiddleware from "redux-thunk"

export const rootReducer = combineReducers({
    todo: todoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store