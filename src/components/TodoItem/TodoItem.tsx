import { ListItem, ListItemText, Checkbox } from "@mui/material";
import React from "react";

interface TodoItemProps {
  todo: { text: string; completed: boolean };
  toggleTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <ListItem>
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        onChange={toggleTodo}
      />
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      />
    </ListItem>
  );
};

export default TodoItem;
