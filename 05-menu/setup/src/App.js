import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

//for be sync with our data when we want add a new item with new category and no need to add button manually
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filterItems = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          selectedCategory={selectedCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
