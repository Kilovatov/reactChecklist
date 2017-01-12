import React from 'react';
import FilterHeader from '../containers/header-container'
import TaskTreeView from '../TaskTreeView'
import SubtasksView from '../SubtasksView'
import {Grid, ProgressBar} from 'react-bootstrap';

const MainView  = () => {
        return (
            <div className="App">
                <FilterHeader />
                <ProgressBar now={60}/>
                <Grid>
                    <TaskTreeView />
                    <SubtasksView />
                </Grid>
            </div>
        );
};

export default MainView;