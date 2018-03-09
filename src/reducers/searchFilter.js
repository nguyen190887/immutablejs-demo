import filterTypes from '../utils/filterTypes';
import { SEARCH_DATA, UPDATE_FILTER, REMOVE_FILTER, ADD_FILTER } from '../utils/actionTypes';

var currentIndex = 0;

const initialState = [{
    id: ++currentIndex,
    name: 'name1',
    filterType: filterTypes.Contains,
    value: 'value1'
}
];

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

const searchFilter = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return updateFilter(state, action.id, action.target, action.value);
        case REMOVE_FILTER:
            return removeFilter(state, action.id);
        case ADD_FILTER:
            return addFilter(state);
        case SEARCH_DATA:
            console.log(`Searching data: ${JSON.stringify(state)}`);
            return state;
        default:
            return state;
    }
}

export default searchFilter;
