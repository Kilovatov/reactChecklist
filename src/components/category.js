import React, { PropTypes } from 'react'
import { Panel, Button, Glyphicon, Checkbox } from 'react-bootstrap';
import CategoryLink from '../containers/category-link'

const Category = ({ name, id }) => (
    <Panel>
        <Checkbox className="pull-left"><CategoryLink id={id}>
            {name}    </CategoryLink>
        </Checkbox>
        <Button><Glyphicon glyph="pencil"/></Button>
        <Button className="pull-right"><Glyphicon glyph="trash"/></Button>
    </Panel>
)

Category.propTypes = {
    name: PropTypes.string.isRequired
}

export default Category