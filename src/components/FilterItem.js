import React from 'react';

const FilterItem = ({name, filterType, value}) => {
    return (
        <div>
            <input type="text" value={name} />
            <input type="text" value={filterType} />
            <input type="text" value={value} />
        </div>
    );
};

export default FilterItem;
