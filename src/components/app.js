import React from 'react'
import Footer from './footer'
import AddTodo from '../layout-components/simple-form'
import VisibleTodoList from '../containers/visible-todo-list'
import { addTodo } from './../actions'
import getCategory from '../common/utils';

const App = () => (
    <div>
        <AddTodo placeholder="some task" buttonText="add task" add={addTodo.bind(null, getCategory())} />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App