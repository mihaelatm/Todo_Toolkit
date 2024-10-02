import { useState } from "react";
import { addTodo } from "../../redux/slices/TodoSlice";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { notification, Input, Button } from "antd";
import styles from "./styles.module.css";

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (!title) {
      notification.warning({
        message: "Empty Input",
        description: "Please enter a title for the todo!",
        placement: "topRight",
      });
      return;
    }
    dispatch(
      addTodo({
        id: uid(),
        title,
        completed: false,
      })
    );
    notification.success({
      message: "Todo Added",
      description: `Todo "${title}" has been added successfully!`,
      placement: "topRight",
    });

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        size="large"
        value={title}
        type="text"
        placeholder="Enter new todo"
        onChange={(event) => setTitle(event.target.value)}
        className={styles.input_form}
      />
      <Button type="primary" htmlType="submit">
        Add todo
      </Button>
    </form>
  );
}

export default Form;
