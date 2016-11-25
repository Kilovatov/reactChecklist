import React from 'react';
import AddSubtask from './subtasks/AddSubtask';
import SubtasksList from './subtasks/SubtasksList';

class SubtasksView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="subtasks">
                <AddSubtask/>
                <SubtasksList/>
            </div>
        );
    }
}


export default SubtasksView;