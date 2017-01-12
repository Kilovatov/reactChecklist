import React from 'react';
import { connect } from 'react-redux'
import HeaderEditTaskView from '../edit-task/HeaderEditTaskView'
import EditAreaView from '../edit-task/EditAreaView'
import CategoryList from './../components/category-list'
import {Grid, Col} from 'react-bootstrap';
import getId from '../common/utils'

const EditTaskView = ( {todo} ) => {
    return (
        <div className="App">
            <HeaderEditTaskView taskName={todo.title}/>
            <Grid>
                <Col xs={6} md={4}>
                    <CategoryList/>
                </Col>
                <Col xs={12} md={8}>
                    <EditAreaView todo={todo}/>
                </Col>

            </Grid>
        </div>
    );
};

const getTodoByUrl = (state) => {
    const id = getId();
    for (var todo of state.todos) {
        if (todo.id === id)
            return todo;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return         {todo: getTodoByUrl(state)}
}

const EditTask = connect(
    mapStateToProps
)(EditTaskView)


export default EditTask