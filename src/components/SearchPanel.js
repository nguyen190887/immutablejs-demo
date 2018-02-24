import React from 'react';
import FilterItem from './FilterItem';

const SearchPanel = ({filters}) => (
    <div>
        Search Panel here
        {filters && filters.map(item => (
            <FilterItem key={item.id} {...item} />
        ))}
    </div>
);

export default SearchPanel;
