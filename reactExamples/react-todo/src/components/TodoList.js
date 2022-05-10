import TodoListItem from "./TodoListItem";
const TodoList = ({ items = [] }) => {
  console.log(items)
  return items.map(item => 
    <TodoListItem key={item.id} {...item} />
  )
};
export default TodoList;
