import React from 'react';
import { Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

let SimpleForm = (props) => {
    let input;
    return (
        <form onSubmit={e => {
            e.preventDefault();

            if (!input.trim()) {
                return
            }
            props.dispatch(props.add(input));
            e.target.reset();
        }}>
            <FormGroup bsSize="large" >
                <InputGroup bsSize="large" >
                    <FormControl type="input" placeholder={props.placeholder} onChange={e => {
                        input = e.target.value;
                    }}/>
                    <InputGroup.Button>
                        <Button bsSize="large" type="submit" >{props.buttonText}</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </form>
    );
};

SimpleForm = connect()(SimpleForm);

export default SimpleForm;