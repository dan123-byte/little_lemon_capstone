import '../../css/Highlights.css';

function Highlights() {

  return (
    <section id="highlights">
        <div className="highlights-header">
            <h1>Specials</h1>
            <button>Online Menu</button>
        </div>

        <div className="highlights-cards">
            <article className="card">
            <img src="/assets/greek.jpg" alt="Greek Salad" />
            <div className="card-content">
                <h3>Greek Salad <span>$12.99</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...</p>
                <a href="/order" class="order-link">Order a delivery</a>
            </div>
            </article>

            <article className="card">
            <img src="/assets/restaurant.jpg" alt="Bruchetta" />
            <div className="card-content">
                <h3>Bruchetta <span>$5.99</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...</p>
                <a href="/order" class="order-link">Order a delivery</a>
            </div>
            </article>

            <article className="card">
            <img src="/assets/lemon.jpg" alt="Lemon Dessert" />
            <div className="card-content">
                <h3>Lemon Dessert <span>$5.00</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...</p>
                <a href="/order" class="order-link">Order a delivery</a>
            </div>
            </article>
        </div>
        </section>
  );
}

export default Highlights;