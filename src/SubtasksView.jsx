import React from 'react';
import AddItem from './layout-components/simple-form';
import SubtasksList from './subtasks/SubtasksList';
import {Col} from 'react-bootstrap';

const SubtasksView = (props)=> {
    return (
        <Col xs={12} md={8}>
            <AddItem placeholder="Enter task" buttonText="Add"/>
            <SubtasksList tasks={props.tasks}/>
        </Col>
    );
};


export default SubtasksView;