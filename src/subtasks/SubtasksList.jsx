import React from 'react';
import Subtask from '../components/subtask'

const SubtasksList = (props) => {
        return(
            <div className="subtasks-list">
                {props.tasks.map(elem=><Subtask key={elem.id} name={elem.title}/>)}
            </div>
        );
}

export default SubtasksList;