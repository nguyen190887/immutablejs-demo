import FilterTypes from '../utils/FilterTypes';

var currentIndex = 0;

const initialState = [{
        id: ++currentIndex,
        name: 'name1',
        filterType: FilterTypes.Equals,
        value: 'value1'
    }
];

const searchFilter = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default searchFilter;
