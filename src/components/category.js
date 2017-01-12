import React, { PropTypes } from 'react'
import { Panel, Button, Glyphicon, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { setCategoryFilter } from '../actions'
import { deleteCategory } from '../actions'


let Category = ({ name, id, active, onClick, onDelete }) => (
    <Panel bsStyle={active ? 'primary' : 'default'} onClick={e => {
        e.preventDefault()
        browserHistory.push('/main/' + id)
        onClick()
    }}>
        <Checkbox className="pull-left">
            {name}
        </Checkbox>
        <Button><Glyphicon glyph="pencil"/></Button>
        <Button className="pull-right" onClick={onDelete}><Glyphicon glyph="trash"/></Button>
    </Panel>
)

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {active: state.categoryFilter===ownProps.id};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setCategoryFilter(ownProps.id))
        },
        onDelete: () => {
            dispatch(deleteCategory(ownProps.id))
        },

    }
}

Category.propTypes = {
    name: PropTypes.string.isRequired
}

Category = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)

export default Category