import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedName, setSelectedName] = useState("");
  const [products, setProducts] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const selected = isSelected ? "selected" : "";
  const newList = TASKS;

  function addClass(item) {
    setSelectedName(item);
    setIsSelected(!isSelected);
  }

  useEffect(() => {
    if (selectedName === "" || selectedName === "All") {
      return setProducts(TASKS);
    }
    const filteredProducts = newList.filter(
      (category) => category.category === selectedName
    );
    setProducts(filteredProducts);
  }, [selectedName]);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selected={selected}
        addClass={addClass}
        categories={CATEGORIES}
      />
      {CATEGORIES && <NewTaskForm categories={CATEGORIES} />}
      {products && <TaskList task={products} setProducts={setProducts} />}
    </div>
  );
}

export default App;
