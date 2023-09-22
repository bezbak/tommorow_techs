import Beginning from "./pages/Beginning/Beginning";
import { Routes,Route } from "react-router-dom";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Beginning/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  )
}

export default App
