import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ formData, setFormData, onItemFormSubmit }) {

  function handleChange(e) {
    const name = e.target.name;
    setFormData({...formData,
    [name]: e.target.value,
    });
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
