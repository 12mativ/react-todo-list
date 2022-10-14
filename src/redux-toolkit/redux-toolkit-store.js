import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todoReducer} from './todo-toolkit-reducer'

const rootReducer = combineReducers({
    todoToolkit: todoReducer
})

export const store = configureStore({
    reducer: rootReducer
})