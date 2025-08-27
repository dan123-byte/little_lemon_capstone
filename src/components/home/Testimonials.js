import '../../css/Testimonials.css';

function Testimonials() {

  return (
    <section id="testimonials">
        <div className="testimonials-header">
            <h1>Testimonials</h1>
        </div>

        <div className="testimonials-cards">
            <article className="card">
            <img src="/assets/man.png" alt="John Doe" />
            <div className="card-content">
                <h3>John Doe</h3>
                <p>"Amazing food and great atmosphere. Highly recommend!"</p>
            </div>
            </article>

            <article className="card">
            <img src="/assets/man.png" alt="Jane Smith" />
            <div className="card-content">
                <h3>Jane Smith</h3>
                <p>"The staff was very friendly, and the dishes were delicious."</p>
            </div>
            </article>

            <article className="card">
            <img src="/assets/man.png" alt="Michael Lee" />
            <div className="card-content">
                <h3>Michael Lee</h3>
                <p>"Best Mediterranean restaurant in town. I’ll definitely come back!"</p>
            </div>
            </article>
        </div>
    </section>
  );
}

export default Testimonials;