import React from 'react';
import Category from './Category'

const CategoryList = (props) => {
    return(
        <div className="categoty-list">
            { props.categories.map(elem=><Category key={elem.name} name={elem.name} subs={elem.categories}/>) }
        </div>
    );
};

export default CategoryList;