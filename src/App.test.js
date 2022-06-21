import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Test header renders with correct text', () => {
  render(<App/>)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")
});

describe('test for the button', () => {
  test('button changes color when clicked', () => {
    render(<App/>)
    const colorBtn = screen.getByRole("button")
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({backgroundColor: "blue"})
    expect(colorBtn.textContent).toBe("Change button color to green")
  })
})

test('checkbox disables button when first clicked, then enables button on second click', () => {
  render(<App/>)
  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole("checkbox")

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
})

test('text says Button enabled when checkbox first clicked and text says Button disabled on second click of checkbox', () =>{
  render(<App/>)
  const checkbox = screen.getByRole("checkbox")
  const btnText = screen.getByRole("paragraph")
  
  expect(btnText.textContent).toBe("Button is enabled")
  
  userEvent.click(checkbox)
  expect(btnText.textContent).toBe("Button is disabled")

  userEvent.click(checkbox)
  expect(btnText.textContent).toBe("Button is enabled")
})

//bonus
describe('initial condition', () => {
  test('button is initially enabled and checkbox is initially not checked', () => {
      render(<App/>)
      const colorBtn = screen.getByRole("button")
      expect(colorBtn).toBeEnabled()

      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).not.toBeChecked()
  })
})

