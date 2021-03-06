import React from 'react';
import filterTypes from '../utils/filterTypes';

const FilterType = ({value, id, updateFilterType}) => {
    let options = [];
    for (let type in filterTypes) {
        options.push(<option key={type} value={type}>{type}</option>);
    }
    return (
        <select value={value} onChange={updateFilterType}>
            {options}
        </select>
    );
};

export default FilterType;
