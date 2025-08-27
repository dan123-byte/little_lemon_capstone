import '../../css/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <section id="hero">
      <section>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/reserve">
          <button>Reserve a Table</button>
        </Link>
      </section>
      <section>
        <img src="/assets/restaurant.jpg" alt="Restaurant" />
      </section>
    </section>
  );
}

export default Hero;