import FilterTypes from '../utils/FilterTypes';

var currentIndex = 0;

const initialState = [{
    id: ++currentIndex,
    name: 'name1',
    filterType: FilterTypes.Contains,
    value: 'value1'
}, {
    id: ++currentIndex,
    name: 'name2',
    filterType: FilterTypes.StartsWith,
    value: 'value2'
}
];

const searchFilter = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default searchFilter;