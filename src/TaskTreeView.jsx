import React from 'react';
import AddItem from './layout-components/simple-form';
import CategoryList from './task-tree/CategoryList';
import {Col} from 'react-bootstrap';

const TaskTreeView = (props) => {
    return (
        <Col xs={6} md={4}>
            <AddItem placeholder="Enter category title" buttonText="Add"/>
            <CategoryList categories={props.categories}/>
        </Col>
    );
};



export default TaskTreeView;