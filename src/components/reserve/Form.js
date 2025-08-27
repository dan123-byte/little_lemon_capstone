import '../../css/Form.css';

function Form() {
  return (
    <section id="form">
      <h1>Reservation Form</h1>

      <form>
        <div className="form-group">
          <label>
            Date Picker
            <input type="date" name="date" required />
          </label>
          <label>
            Time Selection
            <input type="time" name="time" required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Number of Guests
            <input type="number" name="guests" min="1" required />
          </label>
          <label>
            Select Occasion
            <select name="occasion" required>
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
            <input type="text" name="fullname" required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" required />
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
