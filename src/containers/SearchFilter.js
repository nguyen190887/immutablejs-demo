import { connect } from 'react-redux';
import SearchPanel from '../components/SearchPanel';
import { search, updateFilter, updateFilterType } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.searchFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        search: () => dispatch(search()),
        updateFilter: (id, item) => dispatch(updateFilter(id, item)),
        updateFilterType: (id, filterType) => dispatch(updateFilterType(id, filterType))
    }
};

const SearchFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel);

export default SearchFilter;
