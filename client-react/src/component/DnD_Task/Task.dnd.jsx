/** @format */
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Task({ task }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const ghostStyle = {
    ...style,
    height: "10vh",
    backgroundColor: "#EEEEEE",
    border: "2px solid #111",
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={ghostStyle}
        className="ReadingReOrder__label form-group d-flex align-items-center"
      ></div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="ReadingReOrder__task p-1">
        <div className={`custom_color ${task.status} p-2`}>
          <b>{task.title}</b>
        </div>
        <div className="task_desc mt-1">
          <p>{task.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
