import { removeTodo, toggleCompleteTodo } from "../../redux/slices/TodoSlice";
import { useDispatch } from "react-redux";
import { Button, message, Popconfirm } from "antd";
import styles from "./styles.module.css";

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
    <div className={styles.item}>
      <span
        style={{
          color: completed ? "red" : "green",
          fontSize: "18px", // Ajustează dimensiunea textului
          textDecoration: completed ? "line-through" : "none", // Adaugă linie peste textul completat
        }}
      >
        {title}
      </span>
      <div>
        <Button
          type="primary"
          onClick={() => dispatch(toggleCompleteTodo(id))}
          style={{ marginRight: "10px" }} // Spațiu între butoane
        >
          {completed ? "Undo" : "Complete"}
        </Button>

        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger type="primary">
            Remove
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
}

export default Item;
