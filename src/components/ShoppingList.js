import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ searchValue, setSearchValue ] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if(searchValue !== '') {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    } 
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
    
  });
console.log(itemsToDisplay);
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
