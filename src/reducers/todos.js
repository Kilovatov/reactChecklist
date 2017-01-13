const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                title: action.title,
                text: action.text,
                completed: false,
                category: action.category || 'uncategorised'
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })
        // case 'CHECK_CATEGORY':
        //     return state.map(todo => {if (todo.category === action.id) {todo.completed = action.done}})
        case 'EDIT_TODO_DETAILS':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: action.completed,
                text: action.text,
                title: action.title
            })

        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'DELETE_CATEGORY':
            return state.filter(t => t.category !== action.id)
        case 'TOGGLE_TODO':
        case 'EDIT_TODO_DETAILS':
            return state.map(t =>
                todo(t, action)
            )
        default:
            return state
    }
}

export default todos