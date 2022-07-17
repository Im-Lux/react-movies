import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Discovery from "./pages/discovery/Discovery";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/discovery/:category/:id" element={<Details />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
