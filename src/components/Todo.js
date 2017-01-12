import React, { PropTypes } from 'react'
import { Panel, Button, Glyphicon, Checkbox } from 'react-bootstrap';
import EditLink from './../containers/edit-link'

const Todo = ({ onClick, onEditClick, completed, title, id }) => (
    <Panel>
        <Checkbox className="pull-left" onClick={onClick} checked={completed}
                  >{title}</Checkbox>
        <EditLink id={id}><Button className="pull-right"><Glyphicon glyph="pencil"  />
        </Button>
        </EditLink>
    </Panel>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

export default Todo