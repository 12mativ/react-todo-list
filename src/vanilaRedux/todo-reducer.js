const INC = 'INC'
const DEC = 'DEC'

const initialState = {
    count: 0
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC: {
            return {
                ...state,
                count: action.count
            }
        }

        case DEC: {
            return {
                ...state,
                count: action.count
            }
        }
        default: {
            return state
        }
    }
}

export const increment = (count) => {
    return {type: 'INC', count}
}

export const decrement = (count) => {
    return {type: 'DEC', count}
}