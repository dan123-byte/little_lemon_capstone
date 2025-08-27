import './App.css';
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Highlights from "./components/home/Highlights";
import Testimonials from "./components/home/Testimonials";
import About from "./components/home/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import R_Page from "./R_Page";
import ConfirmedBooking from "./components/reserve/Confirmed";

function App() {
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Highlights />
              <Testimonials />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/reserve" element={<R_Page />} />

        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
