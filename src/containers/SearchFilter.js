import { connect } from 'react-redux';
import SearchPanel from '../components/SearchPanel';
import { search, updateFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.searchFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        search: () => dispatch(search()),
        updateFilter: (id, target, value) => dispatch(updateFilter(id, target, value))
    }
};

const SearchFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel);

export default SearchFilter;
