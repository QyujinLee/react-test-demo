import { render, screen } from '@testing-library/react';
import SummaryPage from '../../../pages/SummaryPage/SummaryPage';

test('checkbox and button', () => {
  render(<SummaryPage />);
  const checkbox: HTMLInputElement = screen.getByRole('checkbox', {
    name: '주문하려는 것을 확인하셨나요?',
  });
  expect(checkbox.checked).toEqual(false);

  const btnConfirm: HTMLButtonElement = screen.getByRole('button', { name: '주문 확인' });
  expect(btnConfirm.disabled).toBeTruthy();
});
