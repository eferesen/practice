import { useContext } from 'react';
import TodoContext from '../TodoContext';

const TodoListItem = ({ id, completed, task }) => {
  const dispatch = useContext(TodoContext);
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: 'completed', payload: { id } })}
      />
      <input
        type="text"
        defaultValue={task}
        onChange={(e) =>
          dispatch({ type: 'task', payload: { id, task: e.target.value } })
        }
      />
    </div>
  );
};
export default TodoListItem;
