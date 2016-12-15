import React from 'react';
import Subtask from './Subtask'

const SubtasksList = (props) => {
        return(
            <div className="subtasks-list">
                {props.tasks.map(elem=><Subtask key={elem.title} name={elem.title}/>)}
            </div>
        );
}

export default SubtasksList;