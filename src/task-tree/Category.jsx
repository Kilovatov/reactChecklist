import React from 'react';

class Category extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="category">
                <span className="left">{this.props.name}</span>
                <button className="left">edit</button>
                <button className="rigth">delete</button>
                <button className="rigth">add</button>
            </div>
        );
    }
}

export default Category;