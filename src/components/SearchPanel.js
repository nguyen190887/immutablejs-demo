import React from 'react';
import FilterItem from './FilterItem';

const SearchPanel = ({filters, search, updateFilterType}) => (
    <div>
        Search Panel here
        {filters && filters.map(item => (
            <FilterItem key={item.id} {...item} updateFilterType={updateFilterType}/>
        ))}
        <button onClick={search}>Search</button>
    </div>
);

export default SearchPanel;
