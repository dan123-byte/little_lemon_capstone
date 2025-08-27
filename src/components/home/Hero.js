import '../../css/Hero.css';

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
        <button>Reserve a Table</button>
      </section>
      <section>
        <img src="/assets/restaurant.jpg" alt="Restaurant" />
      </section>
    </section>
  );
}

export default Hero;