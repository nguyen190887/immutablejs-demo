import { connect } from 'react-redux';
import SearchPanel from '../components/SearchPanel';
import { toJS } from '../components/toJS';
import { search, updateFilter, addFilter, removeFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.searchFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        search: () => dispatch(search()),
        updateFilter: (id, target, value) => dispatch(updateFilter(id, target, value)),
        addFilter: () => dispatch(addFilter()),
        removeFilter: (id) => dispatch(removeFilter(id))
    }
};

const SearchFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(toJS(SearchPanel));

export default SearchFilter;
