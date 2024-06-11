import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp.tsx';

jest.mock('../TodoList/TodoList.tsx', () => (props: any) => (
  <div>
    {props.todos.map((todo: any, index: number) => (
      <div key={index}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => props.toggleTodo(index)}
          aria-label={todo.text}
        />
        {todo.text}
      </div>
    ))}
  </div>
));

describe('TodoApp', () => {
  test('renders TodoApp component', () => {
    render(<TodoApp />);
    expect(screen.getByText('todos')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoApp />);
    const todoCheckbox = screen.getByLabelText('Тестовое задание') as HTMLInputElement;
    fireEvent.click(todoCheckbox);
    expect(todoCheckbox).toBeChecked();
  });

  test('filters todos', () => {
    render(<TodoApp />);
    fireEvent.click(screen.getByText('Active'));
    expect(screen.getByText('Тестовое задание')).toBeInTheDocument();
    expect(screen.queryByText('Комплитед')).not.toBeInTheDocument();
  });

  test('clears completed todos', () => {
    render(<TodoApp />);
    fireEvent.click(screen.getByText('Clear completed'));
    expect(screen.queryByText('Комплитед')).not.toBeInTheDocument();
  });
});
