import React from 'react';
import { Panel, Button, Glyphicon, InputGroup, Checkbox } from 'react-bootstrap';

const Subtask = (props) => {
        return (
            <Panel>
                <Checkbox className="pull-left">{props.name}</Checkbox>
                <Button className="pull-right"><Glyphicon glyph="pencil"  /></Button>
                </Panel>
        );
};

export default Subtask;