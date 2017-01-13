import React from 'react';
import { connect } from 'react-redux'
import HeaderEditTaskView from '../edit-task/header-edit-task-view'
import EditAreaView from '../edit-task/edit-area-view'
import EditCategory from '../edit-task/edit-category'
import CategoryList from './../components/category-list'
import {Grid, Col} from 'react-bootstrap';
import getId from '../common/utils'

const EditTaskView = ( {editable} ) => {
    return (
        <div className="App">
            <HeaderEditTaskView taskName={editable.title}/>
            <Grid>
                <Col xs={6} md={4}>
                    <CategoryList/>
                </Col>
                {editable.category &&
                <Col xs={12} md={8}>
                    <EditAreaView todo={editable}/>
                </Col>
                }
                {!editable.category &&
                <Col xs={12} md={8}>
                    <EditCategory category={editable}/>
                </Col>
                }

            </Grid>
        </div>
    );
};

const getEditableByUrl = (state) => {
    const id = getId();
    for (var todo of state.todos) {
        if (todo.id === id)
            return todo;
    }
    for (var cat of state.categories) {
        if (cat.id === id)
            return cat;
    }
}

const mapStateToProps = (state) => {
    return         {editable: getEditableByUrl(state)}
}

const EditTask = connect(
    mapStateToProps
)(EditTaskView)


export default EditTask