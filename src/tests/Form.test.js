import { render, screen } from "@testing-library/react";
import Form from '../components/reserve/Form';

test('renders the Form heading', () => {
  render(
    <Form
      date="" setDate={() => {}}
      time="" setTime={() => {}}
      guests={1} setGuests={() => {}}
      occasion="" setOccasion={() => {}}
      fullname="" setFullname={() => {}}
      email="" setEmail={() => {}}
      phone="" setPhone={() => {}}
      availableTimes={[]} dispatch={() => {}}
      handleSubmit={() => {}}
    />
  );

  const headingElement = screen.getByText("Reservation Form");
  expect(headingElement).toBeInTheDocument();
});