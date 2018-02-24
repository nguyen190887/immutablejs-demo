import { ADD_FILTER, REMOVE_FILTER, UPDATE_FILTER, SEARCH_DATA } from '../utils/actionTypes';

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

export const updateFilter = (id, target, value) => {
    return {
        type: UPDATE_FILTER,
        id,
        target,
        value
    }
};

export const removeFilter = () => {
    return {
        type: REMOVE_FILTER
    }
};
