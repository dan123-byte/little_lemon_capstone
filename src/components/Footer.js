import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <img src="/assets/footer_logo.png" alt="Little Lemon Logo" />

      <nav>
        <section>
            <h2>Doormat Navigation</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </section>

            <section>
            <h2>Contact</h2>
            <ul>
                <li><a href="/address">Address</a></li>
                <li><a href="/phone">Phone Number</a></li>
                <li><a href="/email">Email</a></li>
            </ul>
            </section>

            <section>
            <h2>Social Media</h2>
            <ul>
                <li><a href="/facebook">Facebook</a></li>
                <li><a href="/instagram">Instagram</a></li>
                <li><a href="/twitter">Twitter</a></li>
            </ul>
            </section>
      </nav>
    </footer>
  );
}

export default Footer;