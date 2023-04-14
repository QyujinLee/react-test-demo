import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../pages/Counter';

test('the counter starts at 0', () => {
  render(<Counter />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(/0/);
});

test('minus button has correct text', () => {
  render(<Counter />);
  const minusButtonElement = screen.getByTestId('btn_minus');
  expect(minusButtonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<Counter />);
  const plusButtonElement = screen.getByTestId('btn_plus');
  expect(plusButtonElement).toHaveTextContent('+');
});

test('when the "+" button is clicked, the counter changes to 1', () => {
  render(<Counter />);
  const plusButtonElement = screen.getByTestId('btn_plus');
  const counterElement = screen.getByTestId('counter');
  fireEvent.click(plusButtonElement);
  expect(counterElement).toHaveTextContent(/1/);
});

test('when the "-" button is clicked, the counter is 0', () => {
  render(<Counter />);
  const minusButtonElement = screen.getByTestId('btn_minus');
  const counterElement = screen.getByTestId('counter');
  fireEvent.click(minusButtonElement);
  expect(counterElement).toHaveTextContent(/0/);
});

test('ON / OFF button has "power" class', () => {
  render(<Counter />);
  const powerButtonElement = screen.getByTestId('btn_power');
  expect(powerButtonElement).toHaveClass('power');
});

test('prevent the +,- button from being pressed when the on/off button is clicked', () => {
  render(<Counter />);
  const plusButtonElement = screen.getByTestId('btn_plus');
  const minusButtonElement = screen.getByTestId('btn_minus');
  const powerButtonElement = screen.getByTestId('btn_power');
  fireEvent.click(powerButtonElement);
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
