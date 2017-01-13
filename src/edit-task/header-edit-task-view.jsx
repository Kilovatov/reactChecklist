import React from 'react';
import {Navbar} from 'react-bootstrap';

const HeaderEditTaskView = (props) => {
        return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    { props.taskName }
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>
        );
};

export default HeaderEditTaskView;