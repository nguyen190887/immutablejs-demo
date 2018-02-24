import { ADD_FILTER, REMOVE_FILTER, UPDATE_FILTER, UPDATE_FILTER_TYPE, SEARCH_DATA } from '../utils/actionTypes';

export const addFilter = () => {
    return {
        type: ADD_FILTER
    }
};

export const search = () => {
    return {
        type: SEARCH_DATA
    }
};

export const updateFilter = (id, item) => {
    return {
        type: UPDATE_FILTER,
        id,
        item
    }
};

export const updateFilterType = (id, filterType) => {
    return {
        type: UPDATE_FILTER_TYPE,
        id,
        filterType
    }
};

export const removeFilter = () => {
    return {
        type: REMOVE_FILTER
    }
};
