import React, {PropTypes} from 'react';

class HeaderEditTaskView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-header">
                <h1 className="header-title">
                    { this.props.taskName }
                </h1>
            </div>
        );
    }
}

HeaderEditTaskView.propTypes = {
    taskName: PropTypes.string.isRequired,
};

export default HeaderEditTaskView;