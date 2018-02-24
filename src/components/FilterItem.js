import React from 'react';
import FilterType from './FilterType';

const FilterItem = ({id, name, filterType, value, updateFilter}) => {

    const updateItem = (event) => {
        updateFilter(id, event.target.name, event.target.value);
    };

    const updateFilterType = (event) => {
        updateFilter(id, 'filterType', event.target.value);
    };

    return (
        <div>
            <input type="text" name='name' value={name} onChange={updateItem}/>
            <FilterType id={id} value={filterType} updateFilterType={updateFilterType} />
            <input type="text" name='value' value={value} onChange={updateItem}/>
        </div>
    );
};

export default FilterItem;
