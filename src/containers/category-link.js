import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import { setCategoryFilter } from '../actions'
import getCategory from '../common/utils'



let CategoryLink = ({ id, children, onClick }) => (
    <Link onClick={e => {
        e.preventDefault()
        browserHistory.push('/main/' + id)
        onClick()
    }}

    >
        {children}
    </Link>
);

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => {
            dispatch(setCategoryFilter(getCategory()))
        }
    }
}

CategoryLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryLink)

export default CategoryLink;