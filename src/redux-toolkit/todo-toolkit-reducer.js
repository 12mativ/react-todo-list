import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = ({
    count: 0,
    todos: [
        {id: 1, text: 'Сделать todo-list'},
        {id: 2, text: 'Сделать зарядку'},
    ]
})

export const increment = createAction('INC', (number) => {
    return {payload: {number: number}}
})

export const decrement = createAction('DEC', (number) => {
    return {payload: {number: number}}
})

export const deleteTd = createAction('DELETE-TD', (deleteId) => {
    return {payload: {deleteId: deleteId}}
})

export const addTd = createAction('ADD-TD', (tdText) => {
    return {payload: {tdText: tdText}}
})

export const todoReducer = createReducer(initialState, {
    [increment]: (state, action) => {
        state.count = state.count + action.payload.number
    },

    [decrement]: (state, action) => {
        state.count = state.count - action.payload.number
    },

    [deleteTd]: (state, action) => {
        state.todos.splice(action.payload.deleteId, 1)
    },

    [addTd]: (state, action) => {
        const tdText = action.payload.tdText
        if (state.todos.length > 0) {
            let lastEl = state.todos[state.todos.length - 1].id + 1
            if (tdText) {
                state.todos.push({id: lastEl, text: tdText})
            }
        } else {
            if (tdText) {
                state.todos.push({id: 1, text: tdText})
            }
        }


    }

})
