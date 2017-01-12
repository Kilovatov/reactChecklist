const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                title: action.title,
                text: action.text,
                completed: false,
                category: action.category
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })
        case 'EDIT_TODO_DETAILS':
            console.log(11);
            console.log(action);
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
            console.log(action);
            return [
                ...state,
                todo(undefined, action)
            ]
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