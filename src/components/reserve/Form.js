import '../../css/Form.css';
import React, { useState, useEffect } from 'react';

function Form({
    date, setDate,
    time, setTime,
    guests, setGuests,
    occasion, setOccasion,
    fullname, setFullname,
    email, setEmail,
    phone, setPhone,
    availableTimes,
    dispatch,
    handleSubmit
  }) {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?\d{10,15}$/;

      const formIsValid =
        date &&
        time &&
        guests >= 1 &&
        guests <= 20 &&
        fullname.length >= 2 &&
        emailRegex.test(email) &&
        phoneRegex.test(phone) &&
        occasion;

      setIsValid(formIsValid);
    }, [date, time, guests, fullname, email, phone, occasion]);

  return (
  <section id="form">
      <h1>Reservation Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Date Picker
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </label>
          <label>
            Time Selection
            <select
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Number of Guests
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </label>
          <label>
            Select Occasion
            <select
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Full Name
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              minLength="2"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="^\+?\d{10,15}$"
              title="Enter a valid phone number"
            />
          </label>
        </div>

        <div className="form-group button-group">
          <button type="submit" disabled={!isValid}>
            Reserve Table
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
