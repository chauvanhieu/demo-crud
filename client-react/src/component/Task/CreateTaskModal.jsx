import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import TaskStatus from "./../../enum/taskStatus.enum";
import TaskService from "./../../services/task.service";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
function CreateTaskModal({ show, setShow, mutate, taskDetail = null }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: TaskStatus.TODO,
  });

  const handleTitleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setTask({ ...task, description: e.target.value });
  };

  const handleStatusChange = (e) => {
    setTask({ ...task, status: e.target.value });
  };

  const handleCreate = async () => {
    if (validateTask() === false) {
      return;
    }
    await TaskService.create(task);
    mutate();
    handleClose();
  };

  const handleUpdate = async () => {
    if (validateTask() === false) {
      return;
    }
    await TaskService.update(taskDetail.id, task);
    mutate();
    handleClose();
  };

  const validateTask = () => {
    if (!task.title) {
      toast.warn("Tiêu đề chưa có gì cả!");
      return false;
    }
    if (!task.description) {
      toast.warn("Hãy mô tả đôi chút về công việc nhé ^^");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (taskDetail) {
      setTask(taskDetail);
    }
  }, [taskDetail]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{taskDetail ? "Cập nhật" : "Thêm task mới"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="form-group m-1">
              <label htmlFor="">Tiêu đề:</label>
              <input
                type="text"
                className="form-control"
                value={task.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="form-group m-1">
              <label htmlFor="">Mô tả:</label>
              <input
                type="text"
                className="form-control"
                value={task.description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="form-group m-1">
              <label htmlFor="">Trạng thái:</label>
              <select
                className="form-control"
                value={task.status}
                onChange={handleStatusChange}
              >
                {Object.keys(TaskStatus).map((item) => (
                  <option value={TaskStatus[item]} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          {taskDetail ? (
            <Button variant="success" onClick={handleUpdate}>
              Cập nhật
            </Button>
          ) : (
            <Button variant="success" onClick={handleCreate}>
              Thêm
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTaskModal;
