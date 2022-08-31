import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ search, setSearch ] = useState('');
  const [ formData, setFormData ] = useState({name: '', category: 'Produce'});

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(e) {
    e.preventDefault();
    setItems(items => {
      return [...items, formData]
    });
  }

  const itemsToDisplay = items.filter((item) => {
    if(search !== '') {
      return item.name.toLowerCase().includes(search.toLowerCase());
    } 
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
    
  });
  return (
    <div className="ShoppingList">
      <ItemForm formData={formData} setFormData={setFormData} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} setSearch={setSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
