import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [search, setSearch] = useState("");
  const [clickedCategory, setClickedCategory] = useState("");

  function checkOption(category) {
    setClickedCategory(category);
  }
  function submitForm(e) {
    e.preventDefault();
  }

  function searchedName(event) {
    setSearch(event.target.value);
  }
  return (
    <form className="new-task-form" onSubmit={submitForm}>
      <label>
        Details
        <input type="text" name="text" onChange={searchedName} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories?.map((category) => {
            return (
              <option
                name={category}
                key={category}
                onClick={(category) => checkOption(category)}
              >
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
