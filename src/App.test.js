import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ReservationForm from './ReservationForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ReservationForm and submits data', () => {
  const { getByLabelText, getByText } = render(<ReservationForm />);

  fireEvent.change(getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(getByLabelText(/date/i), { target: { value: '2022-12-31' } });
  fireEvent.change(getByLabelText(/time/i), { target: { value: '19:00' } });
  fireEvent.change(getByLabelText(/number of guests/i), { target: { value: '4' } });
  fireEvent.change(getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(getByText(/submit/i));

  expect(getByText(/congratulations, you have reserved a table for birthday!/i)).toBeInTheDocument();
});