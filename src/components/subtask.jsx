import React from 'react';
import { Panel, Button, Glyphicon, Checkbox } from 'react-bootstrap';

const Subtask = (props) => {
        return (
            <Panel>
                <Checkbox className="pull-left" onClick={props.onCheckBoxClick}>{props.name}</Checkbox>
                <Button className="pull-right" onClick={props.onEditClick}><Glyphicon glyph="pencil"  /></Button>
                </Panel>
        );
};

export default Subtask;