import React from 'react';
import { Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';

const SimpleForm = (props) => {
    return (
        <form>
            <FormGroup bsSize="large">
                <InputGroup bsSize="large" >
                    <FormControl type="text"placeholder={props.placeholder}  />
                    <InputGroup.Button>
                        <Button bsSize="large">{props.buttonText}</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </form>
    );
};

export default SimpleForm;