import React from 'react';
import FilterItem from './FilterItem';

const SearchPanel = ({filters, search, updateFilter, removeFilter, addFilter}) => (
    <div>
        <h1>Search Builder</h1>
        <div style={{marginBottom: '10px'}}>
            <button onClick={addFilter}> Add filter </button>
        </div>
        {filters && filters.map(item => (
            <div key={item.id} style={{ display: 'flex' }}>
                <FilterItem {...item} updateFilter={updateFilter}/>
                <button onClick={ (event) => removeFilter(item.id) }> - </button>
            </div>
        ))}
        <div style={{marginTop: '10px'}}>
            <button onClick={search}>Search</button>
        </div>
    </div>
);

export default SearchPanel;
