import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';

const ProductsPage = () => {
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const { data: products, isLoading, error } = useQuery(['products', sortBy, category], () => fetchProducts(sortBy, category));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <div className="filters">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
      <div className="products">
        {products.map((product: any) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;