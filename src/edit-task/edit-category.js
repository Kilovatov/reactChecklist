import React from 'react';
import { connect } from 'react-redux'
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import { editCategory, setCategoryFilter } from '../actions'
import { browserHistory } from 'react-router'


const EditCategoryView = ({ category, onSave, onCancel }) => {
    let title = category.title;
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (!title.trim()) {
                return
            }
            onSave(category.id, title);
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
        </form>
    );
};

const mapStateToProps = (state) => {
    return state

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (id, title) => {
            dispatch(editCategory(id, title));
            browserHistory.push('/main')
            dispatch(setCategoryFilter('uncategorised'))
        },
        onCancel: () => {
            browserHistory.push('/main')
            dispatch(setCategoryFilter('uncategorised'))
        }
    }
}

const EditCategory = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCategoryView)


export default EditCategory;