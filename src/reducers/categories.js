const category = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                id: action.id,
                title: action.title,
                done: false
            }
        case 'EDIT_CATEGORY':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                title: action.title
            })
        case 'CHECK_CATEGORY':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                done: !state.done
            })
        default:
            return state
    }
}

const categories = (state = [{id: 'uncategorised', title: 'Uncategorized tasks', done: false}], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [
                ...state,
                category(undefined, action)
            ]
        case 'DELETE_CATEGORY':
            return state.filter(category => category.id !== action.id)
        case 'CHECK_CATEGORY':
        case 'EDIT_CATEGORY':
            return state.map(t =>
                category(t, action)
            )
        default:
            return state
    }
}

export default categories