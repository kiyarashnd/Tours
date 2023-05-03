import React from 'react'

const Categories = ({ categories, filterItems, selectedCategory }) => {
  //filterItems is a function
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`filter-btn ${
              category === selectedCategory ? 'active' : undefined
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
