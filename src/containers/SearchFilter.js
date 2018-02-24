import { connect } from 'react-redux';
import SearchPanel from '../components/SearchPanel';

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.searchFilter
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

const SearchFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPanel);

export default SearchFilter;
