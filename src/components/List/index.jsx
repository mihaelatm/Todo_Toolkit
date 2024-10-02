import { useSelector } from "react-redux";
import Item from "../Item";
import styles from "./styles.module.css";

function List() {
  const todos = useSelector((state) => state.todo.data);

  return (
    <div className={styles.list_items}>
      <h1>Todo List</h1>
      <div className={styles.list}>
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}

export default List;
