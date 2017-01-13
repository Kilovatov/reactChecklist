import { combineReducers } from 'redux'
import todos from './todos'
import categories from './categories'
import visibilityFilter from './visibility-filter'
import categoryFilter from './category-filter'

const todoApp = combineReducers({
    todos,
    categories,
    visibilityFilter,
    categoryFilter
})

export default todoApp