const uuidV1 = require('uuid/v1');

export const addTodo = (category, title) => {
    return {
        type: 'ADD_TODO',
        id: uuidV1(),
        title,
        category
    }
}

export const addCategory = (name) => {
    return {
        type: 'ADD_CATEGORY',
        id: uuidV1(),
        name
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const setCategoryFilter = (id) => {
    return {
        type: 'SET_CATEGORY_FILTER',
        id
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const editTodo = (id) => {
    return {
        type: 'EDIT_TODO',
        id
    }
}

export const editTodoDetails = (id, completed, title, text) => {
    return {
        type: 'EDIT_TODO_DETAILS',
        id,
        completed,
        text,
        title
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}
