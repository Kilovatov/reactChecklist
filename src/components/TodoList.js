import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onEditClick, onDeleteClick }) => (
<div className="subtasks-list">
    {todos.map(todo=><Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} onEditClick={() => onEditClick(todo.id)}/>)}
</div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default TodoList