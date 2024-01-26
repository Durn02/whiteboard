import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NoPage from "./pages/NoPage/NoPage";
import ProfessorHomePage from "./pages/ProfessorHomePage/ProfessorHomePage";

function App() {
  const userInfo = {
    name: "두",
    id: "cdh",
    pw: "1234",
    student_number: "20211",
    isStudent: "N",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage userInfo={userInfo} />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/manage"
          element={<ProfessorHomePage userInfo={userInfo} />}
        />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
