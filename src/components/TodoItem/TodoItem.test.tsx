import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

const mockToggleTodo = jest.fn();

describe('TodoItem', () => {
  test('render TodoItem component', () => {
    render(<TodoItem todo={{ text: 'Test Todo', completed: false }} toggleTodo={mockToggleTodo} />);
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('call toggleTodo on checkbox change', () => {
    render(<TodoItem todo={{ text: 'Test Todo', completed: false }} toggleTodo={mockToggleTodo} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggleTodo).toHaveBeenCalled();
  });
});
