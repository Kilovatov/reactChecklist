import React from 'react';
import FilterHeader from '../containers/header-container'
import TaskTreeView from '../task-tree-view'
import SubtasksView from '../subtasks-view'
import {Grid} from 'react-bootstrap';
import Progress from '../containers/progress-bar-container'

const MainView  = () => {
        return (
            <div className="App">
                <FilterHeader />
                <Progress/>
                <Grid>
                    <TaskTreeView />
                    <SubtasksView />
                </Grid>
            </div>
        );
};

export default MainView;