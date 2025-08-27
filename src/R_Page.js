import Header from "./components/Header";
import Reserve from "./components/reserve/Reserve";
import Form from "./components/reserve/Form";
import Footer from "./components/Footer";

export default function R_Page() {
  return (
    <div>
      <Header />
      <Reserve />
      <Form />
      <Footer />
    </div>
  );
}