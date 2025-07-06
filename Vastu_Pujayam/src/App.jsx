import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GemstoneProd from "./pages/GemstoneProd";
import RudrakshaProd from "./pages/RudrakshaProd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:gemstones" element={<GemstoneProd />} />
          <Route path="/category/:rudraksha" element={<RudrakshaProd />} />
      </Routes>
    </>
  );
}

export default App;
