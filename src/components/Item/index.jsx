import { removeTodo, toggleCompleteTodo } from "../../redux/slices/TodoSlice";
import { useDispatch } from "react-redux";

function Item({ id, title, completed }) {
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
    </div>
  );
}

export default Item;
