import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Informasi from "./pages/Informasi";
import Donasi from "./pages/Donasi";
import Relawan from "./pages/Relawan";
import Kontak from "./pages/kontak";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/relawan" element={<Relawan />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
