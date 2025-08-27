import '../../css/Form.css';

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
              onChange={setDate}
              required
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
            />
          </label>
        </div>

        <div className="form-group button-group">
          <button type="submit">Reserve Table</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
