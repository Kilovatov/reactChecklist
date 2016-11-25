import React, {PropTypes} from 'react';


class NameOfTheTask extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="task-name">
                <input className="editable-name" type="text" value={ this.props.taskName }/>
                <input type="checkbox" checked={ this.props.isDone }/> Done
            </div>
        );
    }
}

NameOfTheTask.propTypes = {
    taskName: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
};

export default NameOfTheTask;