import { connect } from 'react-redux'
import { toggleTodo, editTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const getTodosInCategory = (todos, id) => {
            return id ? todos.filter(t => t.category === id) : todos;
}

const mapStateToProps = (state) => {
    console.log(state.categoryFilter);
    return {
        todos: getTodosInCategory(getVisibleTodos(state.todos, state.visibilityFilter), state.categoryFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onEditClick: (id) => {
            dispatch(editTodo(id))
        },
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList