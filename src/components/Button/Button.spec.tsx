import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button component", () => {

  test('renders button with text', () => {
    render(<Button handleExec={() => { }} text="Click me" />);
    const buttonText = screen.getByText(/click me/i);
    expect(buttonText).toBeInTheDocument();
  });

  test('renders button with icon when icon prop is true', () => {
    render(<Button handleExec={() => { }} icon text="Click me" />);
    const icon = screen.getByTestId('AddIcon');
    expect(icon).toBeInTheDocument();
  });

  test('renders button with color primary', () => {
    render(
      <Button
        color='primary'
        handleExec={() => { }}
        icon
        text="Click me"
      />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('primary');
  });

  test('renders button with color secondary', () => {
    render(
      <Button
        color='secondary'
        handleExec={() => { }}
        icon
        text="Click me"
      />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('secondary');
  });

  test('calls handleExec when button is clicked', () => {
    const handleExec = jest.fn();
    render(<Button handleExec={handleExec} text="Click me" />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleExec).toHaveBeenCalledTimes(1);
  });
})