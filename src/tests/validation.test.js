import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import Form from '../components/reserve/Form';

function FormWrapper() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const availableTimes = ['12:00', '13:00'];

  return (
    <Form
      date={date} setDate={setDate}
      time={time} setTime={setTime}
      guests={guests} setGuests={setGuests}
      occasion={occasion} setOccasion={setOccasion}
      fullname={fullname} setFullname={setFullname}
      email={email} setEmail={setEmail}
      phone={phone} setPhone={setPhone}
      availableTimes={availableTimes}
      handleSubmit={() => {}}
    />
  );
}

describe('BookingForm HTML5 validation', () => {
  test('date input has required attribute and min date', () => {
    render(<FormWrapper />);
    const dateInput = screen.getByLabelText(/date picker/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute('min');
  });

  test('time select is required', () => {
    render(<FormWrapper />);
    const timeSelect = screen.getByLabelText(/time selection/i);
    expect(timeSelect).toBeRequired();
  });

  test('guests input has min and max values', () => {
    render(<FormWrapper />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '20');
    expect(guestsInput).toBeRequired();
  });

  test('fullname input has minLength', () => {
    render(<FormWrapper />);
    const fullnameInput = screen.getByLabelText(/full name/i);
    expect(fullnameInput).toHaveAttribute('minLength', '2');
    expect(fullnameInput).toBeRequired();
  });

  test('email input is required and type email', () => {
    render(<FormWrapper />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeRequired();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  test('phone input has pattern attribute', () => {
    render(<FormWrapper />);
    const phoneInput = screen.getByLabelText(/phone number/i);
    expect(phoneInput).toBeRequired();
    expect(phoneInput).toHaveAttribute('pattern', '^\\+?\\d{10,15}$');
  });

  test('occasion select is required', () => {
    render(<FormWrapper />);
    const occasionSelect = screen.getByLabelText(/select occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe('BookingForm JS validation', () => {
  test('submit button is disabled with invalid inputs', () => {
    render(<FormWrapper />);
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled with valid inputs', () => {
    render(<FormWrapper />);

    fireEvent.change(screen.getByLabelText(/date picker/i), { target: { value: '2025-09-01' } });
    fireEvent.change(screen.getByLabelText(/time selection/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } }); // number, not string
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '+12345678901' } });
    fireEvent.change(screen.getByLabelText(/select occasion/i), { target: { value: 'birthday' } });

    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    expect(submitButton).toBeEnabled();
  });
});
