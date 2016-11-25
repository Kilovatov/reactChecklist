import React, { Component } from 'react';
import HeaderEditTaskView from './edit-task/HeaderEditTaskView'
import EditAreaView from './edit-task/EditAreaView'
import CategoryList from './task-tree/CategoryList'

class EditTaskView extends Component {
    render() {
        return (
            <div className="App">
                <HeaderEditTaskView taskName="Name of the task"/>
                <div className="main-body">
                    <CategoryList/>
                    <EditAreaView/>
                </div>
            </div>
        );
    }
}

export default EditTaskView