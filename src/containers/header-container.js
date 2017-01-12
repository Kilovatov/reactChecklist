import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Header from '../HeaderView'

const mapStateToProps = (state) => {
    return {
        active: 'SHOW_ACTIVE' === state.visibilityFilter
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