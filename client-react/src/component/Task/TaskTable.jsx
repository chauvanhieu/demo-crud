/** @format */
import Table from "react-bootstrap/Table";
import useSWR from "swr";
import TaskService from "./../../services/task.service";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import SWRKEY from "./../../constant/swrKey";

function TaskTable() {
  const { data, error, mutate } = useSWR(
    SWRKEY.GET_ALL_TASKS,
    TaskService.getAll
  );

  const [showModal, setShowModal] = useState(false);
  const [taskUpdating, setTaskUpdating] = useState(null);
  useEffect(() => {
    if (error) {
      toast.error(error.toString());
    }
  }, [error]);

  const openModalUpdate = (task) => {
    setTaskUpdating(task);
    setShowModal(true);
  };

  const handleDeleteTask = async (id) => {
    try {
      await TaskService.delete(id);
      mutate();
    } catch (error) {
      return;
    }
  };

  return (
    <>
      {showModal && (
        <CreateTaskModal
          setShow={setShowModal}
          show={showModal}
          mutate={mutate}
          taskDetail={taskUpdating}
        />
      )}
      <div className="container">
        <center>
          <h1>Danh sách công việc cần làm</h1>
        </center>
        <div className="task-control">
          <button
            className="btn btn-success"
            onClick={() => {
              setTaskUpdating(null);
              setShowModal(true);
            }}
          >
            Thêm mới
          </button>
        </div>
        <div className="task-table mt-5">
          <Table striped bordered hover>
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {data &&
                data.map((task, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          openModalUpdate(task);
                        }}
                      >
                        Chỉnh sửa
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDeleteTask(task.id);
                        }}
                      >
                        Xóa task
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

const TableHeader = () => {
  return (
    <tr>
      <th>STT</th>
      <th>Công việc</th>
      <th>Mô tả</th>
      <th>Trạng thái</th>
      <th></th>
    </tr>
  );
};

export default TaskTable;
