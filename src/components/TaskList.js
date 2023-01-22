
import React from "react";
import Task from "./Task";

function TaskList({ task, setProducts }) {
  // Deletes Item when the delete button is pressed
  function deleteItem(dItem) {
    const newText = task.filter(item => item !== dItem)
    setProducts(newText)
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {task && task.map((item, index) => {
        return (
          <Task
            key={index}
            category={item.category}
            text={item.text}
            item={item}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}

export default TaskList;