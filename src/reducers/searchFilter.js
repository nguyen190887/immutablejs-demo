import filterTypes from '../utils/filterTypes';
import { SEARCH_DATA, UPDATE_FILTER, REMOVE_FILTER, ADD_FILTER } from '../utils/actionTypes';

var currentIndex = 0;
const initialState = {
    filters: [
        {
            id: ++currentIndex,
            name: 'name1',
            filterType: filterTypes.Contains,
            value: 'value1'
        }
    ],
    searchData: ''
};

const updateFilter = (state, id, target, value) => {
    let foundIndex = state.findIndex(item => item.id === id);
    if (foundIndex > -1) {
        return Object.assign(
            [...state],
            { [foundIndex]: Object.assign({}, state[foundIndex], { [target]: value }) });
    }
    return state;
};

const removeFilter = (state, id) => {
    return state.filter(item => item.id !== id);
};

const addFilter = (state) => {
    let newFilter = {
        id: ++currentIndex,
        name: '',
        value: '',
        filterType: filterTypes.Contains
    };
    return state.concat([newFilter]);
};

const getSearchData = (filters) => {
    return JSON.stringify(filters.filter(item => item.name !== ''));
};

const searchFilter = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return {...state, filters: updateFilter(state.filters, action.id, action.target, action.value)};
        case REMOVE_FILTER:
            return {...state, filters: removeFilter(state.filters, action.id)};
        case ADD_FILTER:
            return {...state, filters: addFilter(state.filters)};
        case SEARCH_DATA:
            return {...state, searchData: getSearchData(state.filters)};
        default:
            return state;
    }
}

export default searchFilter;
