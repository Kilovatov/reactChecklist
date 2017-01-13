import React from 'react';
import { connect } from 'react-redux'
import {ProgressBar} from 'react-bootstrap';


let Progress = ({ progress }) => (
    <ProgressBar now={progress}/>
)

const mapStateToProps = (state) => {
    return {
        progress: 100 * state.todos.filter(t => t.completed).length / state.todos.length
    }
}


Progress = connect(
    mapStateToProps,
)(Progress)

export default Progress