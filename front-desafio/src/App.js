import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import history from "./history";

import { Home } from "./pages/Home/index.js";
import RegisterDelivery from "./pages/RegisterDelivery";

export const REACT_APP_GOOGLE_API_KEY =
  "AIzaSyCkgfnCiyOJfreB3tAH4qymS_47PP7p1XE";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<RegisterDelivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
