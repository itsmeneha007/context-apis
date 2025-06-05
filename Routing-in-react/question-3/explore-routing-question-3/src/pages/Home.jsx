import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSort from '../components/FilterSort';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFiltered(data.products);
        const uniqueCats = [...new Set(data.products.map(p => p.category))];
        setCategories(uniqueCats);
      });
  }, []);

  const handleFilter = (category) => {
    if (category === 'all') setFiltered(products);
    else setFiltered(products.filter(p => p.category === category));
  };

  const handleSort = (order) => {
    const sorted = [...filtered].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFiltered(sorted);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Product Store</h1>
      <FilterSort categories={categories} onFilter={handleFilter} onSort={handleSort} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '1rem' }}>
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
