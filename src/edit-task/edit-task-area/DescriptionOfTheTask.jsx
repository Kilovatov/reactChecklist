import React, {PropTypes} from 'react';


class DescriptionOfTheTask extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="task-description">
                <input className="text-box" type="textarea" value={ this.props.taskDescription }/>
            </div>
        );
    }
}

DescriptionOfTheTask.propTypes = {
    taskDescription: PropTypes.string.isRequired,
};

export default DescriptionOfTheTask;