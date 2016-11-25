import React from 'react';
import Category from './Category'

class CategoryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {categories: ["category1", "category2", "category3"]}
    }
    render(){
        return(
            <div className="categoty-list">
                {this.state.categories.map(elem=><Category name={elem}/>)}
            </div>
        );
    }
}

export default CategoryList;