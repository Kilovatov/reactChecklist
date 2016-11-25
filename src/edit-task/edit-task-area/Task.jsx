import React from 'react';
import NameOfTheTask from './NameOfTheTask'
import DescriptionOfTheTask from './DescriptionOfTheTask'

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isDone: false}
    }

    render() {
        return (
            <div className="App-task">
                <NameOfTheTask taskName="Name of the task" isDone={ this.state.isDone }/>
                <DescriptionOfTheTask taskDescription="Description of the task"/>
            </div>
        );
    }
}


export default Task;