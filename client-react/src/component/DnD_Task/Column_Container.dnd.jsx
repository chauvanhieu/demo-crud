/** @format */
import React from "react";
import { useMemo } from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Task from "./Task.dnd";

function ColumnContainer({ column, tasks }) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: column.id,
      data: {
        type: "Column",
        column,
      },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const taskIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  return (
    <div ref={setNodeRef} style={style} className="col-md-4">
      <div
        {...attributes}
        {...listeners}
        className="ReadingReOrder__source dnd_column p-1"
      >
        <h4 className="ReadingReOrder__title">{column.title}</h4>
        <hr />
        <SortableContext items={taskIds}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default ColumnContainer;
