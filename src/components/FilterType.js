import React from 'react';
import FilterTypes from '../utils/FilterTypes';

const FilterType = ({value}) => {
    let options = [];
    for (let type in FilterTypes) {
        options.push(<option key={type} value={type}>{type}</option>);
    }
    return (
        <select value={value}>
            {options}
        </select>
    );
};

export default FilterType;
