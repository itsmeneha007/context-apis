import React from 'react';

const FilterSort = ({ categories, onFilter, onSort }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select onChange={(e) => onSort(e.target.value)}>
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
    </div>
  );
};

export default FilterSort;
