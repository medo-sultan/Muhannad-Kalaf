import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import MainLayout from "./components/pages/layouts/MainLayout";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Show from "./components/pages/Show";
// import Products from "./components/pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Products /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
