import React from 'react';
import Subtask from './Subtask'

class SubtasksList extends React.Component {
    constructor(props){
        super(props);
        this.state = {tasks: ["task1", "task2", "task3"]}
    }
    render(){
        return(
            <div className="subtasks-list">
                {this.state.tasks.map(elem=><Subtask name={elem}/>)}
            </div>
        );
    }
}

export default SubtasksList;