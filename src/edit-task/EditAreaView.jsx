import React from 'react';
import Controls from './edit-task-area/Controls'
import Task from './edit-task-area/Task'

class EditAreaView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="edit-area">
                <Controls/>
                <Task/>
            </div>
        );
    }
}


export default EditAreaView;