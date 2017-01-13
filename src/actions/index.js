const uuidV1 = require('uuid/v1');

export const addTodo = (category, title) => {
    return {
        type: 'ADD_TODO',
        id: uuidV1(),
        title,
        category
    }
}

export const addCategory = (title) => {
    return {
        type: 'ADD_CATEGORY',
        id: uuidV1(),
        title
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

export const editCategory = (id, title) => {
    return {
        type: 'EDIT_CATEGORY',
        id,
        title
    }
}

export const deleteCategory = (id) => {
    return {
        type: 'DELETE_CATEGORY',
        id
    }
}

export const checkCategory = (id, done) => {
    console.log(id + done);
    return {
        type: 'CHECK_CATEGORY',
        id,
        done
    }
}
