import React, { PropTypes } from 'react'
import Category from './category'
import { connect } from 'react-redux'


const CategotyList = ({ categories, onCategoryEdit }) => (
    <div>
        {categories.map(category=><Category key={category.id} {...category}/>)}
    </div>
)

CategotyList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired).isRequired
}


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const CategoryListView = connect(
    mapStateToProps,
)(CategotyList)


export default CategoryListView