import React from 'react';
import FilterItem from './FilterItem';

const SearchPanel = ({filters, search, updateFilter}) => (
    <div>
        Search Panel here
        {filters && filters.map(item => (
            <FilterItem key={item.id} {...item} updateFilter={updateFilter}/>
        ))}
        <button onClick={search}>Search</button>
    </div>
);

export default SearchPanel;
