import React from 'react';
import { connect } from 'react-redux'
import {Button, Checkbox, FormGroup, FormControl} from 'react-bootstrap';
import { editTodoDetails, toggleTodo, setCategoryFilter } from '../actions'
import { browserHistory } from 'react-router'


const EditAreaView = ({ todo, onSave, onCancel }) => {
    let title = todo.title;
    let text = todo.text;
    let completed = todo.completed;
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (!title.trim()) {
                return
            }
            onSave(todo.id, completed, title, text);
        }}>
            <FormGroup bsSize="large" className="pull-right">
                <Button bsStyle="primary" type="submit">
                    Save Changes
                </Button>
                {'  '}
                <Button onClick={onCancel}>
                    Cancel
                </Button>
            </FormGroup>
            <FormGroup bsSize="large">
                <FormControl type="text" defaultValue={title} onChange={(e) => title = e.target.value}/>
            </FormGroup>

            <Checkbox onClick={() => completed = !completed} defaultChecked={completed}>
                Done
            </Checkbox>


            <FormGroup>
                <FormControl componentClass="textarea" defaultValue={text} onChange={(e) => text = e.target.value}/>
            </FormGroup>
        </form>
    );
};

const mapStateToProps = (state) => {
    return         state

}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onSave: (id, completed, title, text) => {
            dispatch(editTodoDetails(id, completed, title, text));
            browserHistory.push('/main')
            dispatch(setCategoryFilter('uncategorised'))
        },
        onCancel: () => {
            browserHistory.push('/main')
            dispatch(setCategoryFilter('uncategorised'))
        }
    }
}

const EditArea = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditAreaView)


export default EditArea;