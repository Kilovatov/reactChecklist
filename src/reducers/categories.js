const category = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                id: action.id,
                name: action.name
            }
        default:
            return state
    }
}

const categories = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [
                ...state,
                category(undefined, action)
            ]
        case 'DELETE_CATEGORY':
            return state.filter(category => category.id !== action.id)
        default:
            return state
    }
}

export default categories