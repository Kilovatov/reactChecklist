import React from 'react';
import {Navbar, Checkbox} from 'react-bootstrap';

const HeaderView = ( {onChange, active} ) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    To-Do List
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                {/*<Navbar.Form pullRight>*/}
                    {/*<SimpleForm placeholder="Search" buttonText="Submit" inline/>*/}
                {/*</Navbar.Form>*/}
                <Navbar.Form pullRight>
                    <Checkbox className="header__checkbox" checked={ active } onChange={ onChange }>{' '}Show active</Checkbox>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    );
};


export default HeaderView;