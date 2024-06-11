import React from "react";
import { List } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem.tsx";

interface TodoListProps {
  todos: { text: string; completed: boolean }[];
  toggleTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
      ))}
    </List>
  );
};

export default TodoList;
