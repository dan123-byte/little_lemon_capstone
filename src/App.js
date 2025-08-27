import './App.css';
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Highlights from "./components/home/Highlights";
// import Testimonials from "./components/home/Testimonials";
// import About from "./components/home/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Highlights/>
      {/* <Testimonials/>
      <About/> */}
      <Footer/>
    </div>
  );
}

export default App;
