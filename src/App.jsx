import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<div>signin</div>} />
        <Route path="/signup" element={<div>signup</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
