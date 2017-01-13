const todos = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
}

export default todos