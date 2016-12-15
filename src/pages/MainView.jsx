import React from 'react';
import HeaderView from '../HeaderView'
import TaskTreeView from '../TaskTreeView'
import SubtasksView from '../SubtasksView'
import {Grid, ProgressBar} from 'react-bootstrap';

const MainView  = (props) => {
        return (
            <div className="App">
                <HeaderView/>
                <ProgressBar now={60}/>
                <Grid>
                    <TaskTreeView categories={props.categories}/>
                    <SubtasksView tasks={props.categories[0].tasks}/>
                </Grid>
            </div>
        );
};

export default MainView;