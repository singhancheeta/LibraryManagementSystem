// src/components/Categories.js

import React from 'react';

const Categories = ({ setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Categories</h2>
      <button onClick={() => handleCategoryClick('Sci-Fi')}>Sci-Fi</button>
      <button onClick={() => handleCategoryClick('Fiction')}>Fiction</button>
      <button onClick={() => handleCategoryClick('Comedy')}>Comedy</button>
    </div>
  );
};

export default Categories;
