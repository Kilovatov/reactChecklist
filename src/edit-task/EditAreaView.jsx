import React from 'react';
import {Button, Checkbox, FormGroup, FormControl} from 'react-bootstrap';

const EditAreaView = () => {
    return (
        <form>
            <FormGroup bsSize="large" className="pull-right">
                <Button bsStyle="primary">
                    Save Changes
                </Button>
                {'  '}
                <Button>
                    Cancel
                </Button>
            </FormGroup>
            <FormGroup bsSize="large">
                <FormControl type="text" value="title"/>
            </FormGroup>

            <Checkbox>
                Done
            </Checkbox>

            <FormGroup>
                <FormControl componentClass="textarea" value="description"/>
            </FormGroup>
        </form>
    );
};

export default EditAreaView;