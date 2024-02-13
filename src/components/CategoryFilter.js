import React from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, onSelect } = props;

  return (
    <div className="categories">
    <h5>Category filters</h5>
      {categories.map((category) => (
    <button
      key={category}
      className={selectedCategory === category ? "selected" : ""}
      onClick={() => onSelect(category)}
        >
      {category}
    </button>
      ))}
    </div>
  )
}

export default CategoryFilter;