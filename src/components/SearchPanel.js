import React from 'react';
import FilterItem from './FilterItem';

const SearchPanel = ({filters, search, updateFilter, removeFilter, addFilter}) => (
    <div>
        Search Panel here 
        {filters && filters.map(item => (
            <div key={item.id} style={{ display: 'flex' }}>
                <FilterItem {...item} updateFilter={updateFilter}/>
                <button onClick={ (event) => removeFilter(item.id) }> - </button>
            </div>
        ))}
        <div>
            <button onClick={addFilter}> + </button>
        </div>
        <div>
            <button onClick={search}>Search</button>
        </div>
    </div>
);

export default SearchPanel;
