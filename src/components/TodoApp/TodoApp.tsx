import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import TodoList from "../TodoList/TodoList.tsx";

const FILTER_MAP: { [key: string]: (todo: Todo) => boolean } = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

interface Todo {
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Тестовое задание", completed: false },
    { text: "Комплитед", completed: true },
  ]);
  const [filter, setFilter] = useState<string>("All");
  const [newTodo, setNewTodo] = useState<string>("");

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteCompletedTodos = () => {
    const newTodos = todos.filter((todo: Todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          todos
        </Typography>
        <TextField
          fullWidth
          placeholder="What needs to be done?"
          variant="outlined"
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </Box>
      <TodoList todos={todos.filter(FILTER_MAP[filter])} toggleTodo={toggleTodo} />
      <Box my={2} gap={1} display="flex" justifyContent="space-between" alignItems={'center'}>
        <Typography variant={'caption'}>{todos.filter(FILTER_MAP[filter]).length} items left</Typography>
        <Tabs
          value={filter}
          onChange={(_, newValue) => setFilter(newValue)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {FILTER_NAMES.map((name) => (
            <Tab key={name} label={name} value={name} />
          ))}
        </Tabs>
        <Button variant="contained" color="secondary" onClick={deleteCompletedTodos}>
          Clear completed
        </Button>
      </Box>
    </Container>
  );
};

export default TodoApp;
