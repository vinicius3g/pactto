import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button component", () => {

  test('renders button with text', () => {
    render(<Button text="Click me" handleExec={() => { }} />);
    const buttonText = screen.getByText(/click me/i);
    expect(buttonText).toBeInTheDocument();
  });

  test('renders button with icon when icon prop is true', () => {
    render(<Button text="Click me" icon handleExec={() => { }} />);
    const icon = screen.getByTestId('AddIcon');
    expect(icon).toBeInTheDocument();
  });

  test('renders button with color primary', () => {
    render(<Button text="Click me" color='primary' icon handleExec={() => { }} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('primary');
  });
  
  test('renders button with color secondary', () => {
    render(<Button text="Click me" color='secondary' icon handleExec={() => { }} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('secondary');
  });

  test('calls handleExec when button is clicked', () => {
    const handleExec = jest.fn();
    render(<Button text="Click me" handleExec={handleExec} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleExec).toHaveBeenCalledTimes(1);
  });
})