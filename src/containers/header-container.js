import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Header from '../HeaderView'

const mapStateToProps = (state, showActive) => {
    return {
        active: showActive ? 'SHOW_ACTIVE' === state.visibilityFilter : 'SHOW_ALL' === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    let showActive = false;
    return {
        onChange: () => {
            showActive = !showActive;
            const filter = showActive ? 'SHOW_ACTIVE' : 'SHOW_ALL';
            dispatch(setVisibilityFilter(filter))
        }
    }
}

const FilterHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default FilterHeader