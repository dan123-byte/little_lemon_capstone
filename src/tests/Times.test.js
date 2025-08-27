import { initializeTimes, updateTimes } from '../R_Page';
import { fetchAPI } from '../api';
import { render, fireEvent } from '@testing-library/react';
import R_Page from '../R_Page';

jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('Reducer functions', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    localStorage.clear();
  });

  test('initializeTimes returns the initial available times from fetchAPI', () => {
    const times = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });

  test('updateTimes returns updated times from fetchAPI for a given date', () => {
    const currentTimes = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2025-08-27' };
    const newTimes = updateTimes(currentTimes, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
    expect(newTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });
});

describe('LocalStorage functionality', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('writes new booking to localStorage', () => {
    const { getByLabelText, getByText } = render(<R_Page />);

    fireEvent.change(getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/Date/i), { target: { value: '2025-08-27' } });
    fireEvent.change(getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(getByLabelText(/Guests/i), { target: { value: 2 } });

    fireEvent.click(getByText(/Book Now/i));

    const bookings = JSON.parse(localStorage.getItem('bookings'));
    expect(bookings).toHaveLength(1);
    expect(bookings[0].fullname).toBe('John Doe');
    expect(bookings[0].email).toBe('john@example.com');
  });

  test('reads existing bookings from localStorage', () => {
    const storedBookings = [
      { fullname: 'Alice', email: 'alice@example.com', date: '2025-08-27', time: '17:00', guests: 1 }
    ];
    localStorage.setItem('bookings', JSON.stringify(storedBookings));

    render(<R_Page />);

    const bookings = JSON.parse(localStorage.getItem('bookings'));
    expect(bookings).toEqual(storedBookings);
  });
});