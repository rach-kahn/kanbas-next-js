"use client"
import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
 
export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
 
  return (
<ListGroupItem 
      className="d-flex align-items-center gap-2"
>
<FormControl
        value={todo.title}
        style={{ width: '150px' }}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
 
      <Button 
        onClick={() => dispatch(addTodo(todo))} 
        id="wd-add-todo-click"
>
        Add
</Button>
 
      <Button 
        onClick={() => dispatch(updateTodo(todo))} 
        id="wd-update-todo-click"
        variant="secondary"
>
        Update
</Button>
</ListGroupItem>
  );
}