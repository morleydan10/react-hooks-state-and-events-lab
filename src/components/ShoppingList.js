import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
// step 1 - set state array with 
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilter(e) {
      setSelectedCategory(e.target.value);
  }

  let newItems = items.filter(item => {
    if (selectedCategory === "All"){
      return true;
    } else {
    return item.category === selectedCategory;
  }
  })

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
