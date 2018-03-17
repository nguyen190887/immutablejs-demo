import { Map, List } from 'immutable';
import filterTypes from '../utils/filterTypes';
import { SEARCH_DATA, UPDATE_FILTER, REMOVE_FILTER, ADD_FILTER } from '../utils/actionTypes';

var currentIndex = 0;
const initialState = Map({
    filters: List([
        {
            id: ++currentIndex,
            name: 'name1',
            value: 'value1',
            filterType: filterTypes.Contains
        }
    ]),
    searchData: ''
});

const updateFilter = (filters, id, target, value) => {
    let foundIndex = filters.findIndex(item => item.id === id);
    if (foundIndex > -1) {
        return filters.update(foundIndex, item => {
            return Object.assign({}, item, {[target]: value});
        })
    }
    return filters;
};

const removeFilter = (filters, id) => {
    return filters.filter(item => item.id !== id);
};

const addFilter = (filters) => {
    let newFilter = {
        id: ++currentIndex,
        name: '',
        value: '',
        filterType: filterTypes.Contains
    };
    return filters.push(newFilter);
};

const getSearchData = (filters) => {
    return JSON.stringify(filters.filter(item => item.name !== '').toJS());
};

const searchFilter = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return state.set('filters', updateFilter(state.get('filters'), action.id, action.target, action.value))
        case REMOVE_FILTER:
            return state.set('filters', removeFilter(state.get('filters'), action.id));
        case ADD_FILTER:
            return state.set('filters', addFilter(state.get('filters')));
        case SEARCH_DATA:
            return state.set('searchData', getSearchData(state.get('filters')));
        default:
            return state;
    }
}

export default searchFilter;
