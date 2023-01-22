import React from "react";

function CategoryFilter({ categories, addClass, selected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories?.map((item) => {
        return (
          <button
            onClick={() => addClass(item)}
            key={item}
            className={selected}
          >
            {item}
          </button>
        );
      })}
      {/* <button></button> */}
    </div>
  );
}

export default CategoryFilter;
