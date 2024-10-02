import { useSelector } from "react-redux";
import Item from "../Item";

function List() {
  const todos = useSelector((state) => state.todo.data);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}

export default List;
