import React from 'react';
import AddCategory from './task-tree/AddCategory';
import CategoryList from './task-tree/CategoryList';
class TaskTreeView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-tree">
                <AddCategory/>
                <CategoryList/>
            </div>
        );
    }
}


export default TaskTreeView;