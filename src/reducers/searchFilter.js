import filterTypes from '../utils/filterTypes';
import { SEARCH_DATA, UPDATE_FILTER_TYPE } from '../utils/actionTypes';

var currentIndex = 0;

const initialState = [{
    id: ++currentIndex,
    name: 'name1',
    filterType: filterTypes.Contains,
    value: 'value1'
}, {
    id: ++currentIndex,
    name: 'name2',
    filterType: filterTypes.StartsWith,
    value: 'value2'
}
];

const searchFilter = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER_TYPE:
            // console.log(`Updating filter type for: ${action.id} - ${action.filterType}`);
            let foundIndex = state.findIndex(item => item.id === action.id);
            if (foundIndex > -1) {
                return Object.assign(
                    [...state],
                    { [foundIndex]: Object.assign({}, state[foundIndex], { filterType: action.filterType }) });
            }
            return state;
        case SEARCH_DATA:
            console.log(`Searching data: ${JSON.stringify(state)}`);
            return state;
        default:
            return state;
    }
}

export default searchFilter;
