import React from 'react';
import AddItem from './layout-components/simple-form';
import CategoryList from './components/category-list';
import {Col} from 'react-bootstrap';
import {addCategory} from './actions'

const TaskTreeView = () => {
    return (
        <Col xs={6} md={4}>
            <AddItem placeholder="Enter category title" buttonText="Add" add={addCategory}/>
            <CategoryList/>
        </Col>
    );
};



export default TaskTreeView;