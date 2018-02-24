import React from 'react';
import FilterType from './FilterType';

const FilterItem = ({name, filterType, value}) => {
    return (
        <div>
            <input type="text" value={name} />
            <FilterType value={filterType} />
            <input type="text" value={value} />
        </div>
    );
};

export default FilterItem;
