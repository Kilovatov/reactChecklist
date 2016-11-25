import React from 'react';

class Subtask extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="category">
                <input type="checkbox"/>
                <span>{this.props.name}</span>
                <button>edit</button>
            </div>
        );
    }
}

export default Subtask;