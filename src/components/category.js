import React, { PropTypes } from 'react'
import { Panel, Button, Glyphicon, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { setCategoryFilter } from '../actions'
import { deleteCategory  } from '../actions'


let Category = ({ title, id, active, onClick, onDelete, onCheckbox, done, onEdit }) => (
    <Panel bsStyle={active ? 'primary' : 'default'} onClick={e => {
        e.preventDefault()
        browserHistory.push('/main/' + id)
        onClick()
    }}>
         <Glyphicon glyph={done ? 'ok' : ''} className="pull-left"/>{title}
        {id === 'uncategorised' || < Button className="pull-right" onClick={onDelete}><Glyphicon glyph="trash"/></Button>}

        {id === 'uncategorised' ||  <Button className="pull-right" onClick={(e) => {e.stopPropagation(); onEdit()}}><Glyphicon glyph="pencil"/></Button>}

    </Panel>
)

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.categoryFilter===ownProps.id,
        done: state.todos.filter(t => t.category === ownProps.id).reduce((a,b) =>  {return {completed: a.completed && b.completed}}, {completed: true}).completed
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setCategoryFilter(ownProps.id))
        },
        onDelete: () => {
            dispatch(deleteCategory(ownProps.id))
        },
        onEdit: () => {
            browserHistory.push('/edit/' + ownProps.id)
        }
    }
}

Category.propTypes = {
    title: PropTypes.string.isRequired
}

Category = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)

export default Category