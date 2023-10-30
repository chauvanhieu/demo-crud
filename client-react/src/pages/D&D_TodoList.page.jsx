/** @format */

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTasks } from "../redux/dnd_task.slice";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  pointerWithin,
  PointerSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import ColumnContainer from "../component/DnD_Task/Column_Container.dnd";
import Task from "../component/DnD_Task/Task.dnd";
import DnD_TaskService from "../services/dnd_task.service";
import { toast } from "react-toastify";

function DnD_TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.dnd_task.tasks);

  const defaultCols = [
    {
      id: "TODO",
      title: "Todo Task",
    },
    {
      id: "DOING",
      title: "Doing Task",
    },
    {
      id: "DONE",
      title: "Done Task",
    },
  ];

  useEffect(() => {
    dispatch(getAllTasks());
    console.log("tasks >>> ", tasks);
  }, [dispatch]);

  const [activeTask, setActiveTask] = useState(null);
  const [tasksList, setTasksList] = useState(() => {
    return tasks.map((task) => ({
      ...task,
      col_id: task.status,
    }));
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  function onDragStart(event) {
    const activeTask = event.active.data.current.task;
    setActiveTask(activeTask);
    console.log("Active Task >>", activeTask);
  }

  function onDragEnd(event) {
    const { active, over } = event;

    if (active && over) {
      const activeId = active.id;
      const overId = over.id;
      const isActiveATask = active.data.current?.type === "Task";
      const isOverAColumn = over.data.current?.type === "Column";

      if (isActiveATask && isOverAColumn) {
        const updatedTasksList = tasksList.map((task) => {
          if (task.id === activeId) {
            task.status = overId;
            DnD_TaskService.update(task.id, { status: task.status });
            toast.success("Task status updated successfully");
          }
          return task;
        });
        setTasksList(updatedTasksList);
      }
    }

    setActiveTask(null);
  }

  function onDragOver(event) {
    const { active, over } = event;

    if (!active || !over) return;

    const activeId = active.data.current.task.col_id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (isActiveATask && isOverATask) {
      setTasksList((tasksList) => {
        const activeIndex = tasksList.findIndex((task) => task.id === activeId);
        const overIndex = tasksList.findIndex((task) => task.id === overId);
        return arrayMove(tasksList, activeIndex, overIndex);
      });
    }
  }

  return (
    <>
      <h1>Uncle K todo List</h1>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        collisionDetection={pointerWithin}
      >
        <div className="DnD_TodoList container my-5">
          <div className="row">
            {defaultCols.map((col) => (
              <SortableContext
                key={col.id}
                items={tasksList
                  .filter((task) => task.status === col.id)
                  .map((task) => task.id)}
              >
                <ColumnContainer
                  key={col.id}
                  column={col}
                  tasks={tasksList.filter((task) => task.status === col.id)}
                />
              </SortableContext>
            ))}
          </div>
        </div>
        {createPortal(
          <DragOverlay>{activeTask && <Task task={activeTask} />}</DragOverlay>,
          document.body
        )}
      </DndContext>
      <button
        onClick={() => {
          console.log("tasksList >>> ", tasksList);
          console.log("columnList >>> ", defaultCols);
        }}
      >
        Click me
      </button>
    </>
  );
}

export default DnD_TodoList;
