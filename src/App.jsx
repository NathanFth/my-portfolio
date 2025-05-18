import "./App.css";
import Home from "./pages/Home";
import DetailPortfolio from "./pages/DetailPortfolio";
import PageNotFound from "./pages/PageNotFound";
import Experience from "./pages/Experience";
import Tugas from "./pages/Tugas";
import DetailTugas from "./pages/DetailTugas";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<DetailPortfolio />} />
        <Route path="page-not-found" element={<PageNotFound />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/tugas/:id" element={<DetailTugas />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
