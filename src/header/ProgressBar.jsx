import React from 'react';

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progress: 20}
    }

    render() {
        return (
            <div className="progress-bar">
                <progress  value={this.state.progress} max="100"/>
            </div>
        );
    }
}

export default ProgressBar;