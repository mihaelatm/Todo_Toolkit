import { removeTodo, toggleCompleteTodo } from "../../redux/slices/TodoSlice";
import { useDispatch } from "react-redux";
import { Button, message, Popconfirm } from "antd";

function Item({ id, title, completed }) {
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(removeTodo(id)); // Șterge todo-ul
    message.success("Todo has been deleted successfully!"); // Mesaj de succes
  };

  const cancel = () => {
    message.error("Deletion canceled."); // Mesaj de anulare
  };

  return (
    <div>
      <span
        style={{
          color: completed ? "red" : "green",
        }}
      >
        {title}
      </span>
      <button onClick={() => dispatch(toggleCompleteTodo(id))}>Complete</button>

      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Remove</Button>
      </Popconfirm>
    </div>
  );
}

export default Item;
