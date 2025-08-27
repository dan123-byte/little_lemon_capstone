import '../../css/Confirmed.css';
import { useLocation } from "react-router-dom";

function Confirmed() {
  const location = useLocation();
  const { bookings } = location.state || { bookings: [] };

  return (
    <section id="confirmed">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation. We look forward to seeing you!</p>

      {bookings.length > 0 && (
        <section id="booking-table">
          <h2>Submitted Reservations</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.occasion}</td>
                  <td>{booking.fullname}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}

export default Confirmed;