import React from 'react';
import HeaderEditTaskView from '../edit-task/HeaderEditTaskView'
import EditAreaView from '../edit-task/EditAreaView'
import CategoryList from '../task-tree/CategoryList'
import {Grid, Col} from 'react-bootstrap';

const EditTaskView = (props) => {
    return (
        <div className="App">
            <HeaderEditTaskView taskName="Name of the task"/>
            <Grid>
                <Col xs={6} md={4}>
                    <CategoryList categories={props.categories}/>
                </Col>
                <Col xs={12} md={8}>
                    <EditAreaView/>
                </Col>

            </Grid>
        </div>
    );
};

export default EditTaskView