import React from 'react';
import FilterType from './FilterType';

const FilterItem = ({id, name, filterType, value, updateFilterType}) => {
    return (
        <div>
            <input type="text" value={name} />
            <FilterType id={id} value={filterType} updateFilterType={updateFilterType} />
            <input type="text" value={value} />
        </div>
    );
};

export default FilterItem;
