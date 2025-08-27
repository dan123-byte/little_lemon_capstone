import '../../css/About.css';

function About() {

  return (
    <section id="about">
      <section className="about-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore.
        </p>
      </section>
      <section className="about-image">
        <img src="/assets/chef.jpg" alt="Chef at Little Lemon" />
      </section>
    </section>
  );
}

export default About;