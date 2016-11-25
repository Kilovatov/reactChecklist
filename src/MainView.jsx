import React, { Component } from 'react';
import HeaderView from './HeaderView'
import TaskTreeView from './TaskTreeView'
import SubtasksView from './SubtasksView'
import ProgressBar from './header/ProgressBar'

class MainView extends Component {
    render() {
        return (
            <div className="App">
                <HeaderView/>
                <ProgressBar/>
                <div className="main-body">
                    <TaskTreeView/>
                    <SubtasksView/>
                </div>
            </div>
        );
    }
}

export default MainView;