import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

const mockToggleTodo = jest.fn();

describe('TodoList', () => {
  const todos = [
    { text: 'Test Todo 1', completed: false },
    { text: 'Test Todo 2', completed: true }
  ];

  test('render TodoList component', () => {
    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} />);
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  test('call toggleTodo on checkbox change for any todo', () => {
    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} />);
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(mockToggleTodo).toHaveBeenCalledWith(0);
    fireEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });
});
