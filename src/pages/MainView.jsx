import React from 'react';
import FilterHeader from '../containers/header-container'
import TaskTreeView from '../TaskTreeView'
import SubtasksView from '../SubtasksView'
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