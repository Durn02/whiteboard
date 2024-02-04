import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NoPage from "./pages/NoPage/NoPage";
import ProfessorHomePage from "./pages/ProfessorHomePage/ProfessorHomePage";
import StudentHomePage from "./pages/StudentHomePage/StudentHomePage";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [logined, setLogined] = useState(
    JSON.stringify(userInfo) === "{}" ? false : true
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage userInfo={userInfo} logined={logined} />}
        />
        <Route
          path="/signin"
          element={
            <SigninPage setUserInfo={setUserInfo} setLogined={setLogined} />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        {userInfo.isStudent === "Y" ? (
          <Route
            path="/register"
            element={<StudentHomePage userInfo={userInfo} />}
          />
        ) : (
          <Route
            path="/manage"
            element={<ProfessorHomePage userInfo={userInfo} />}
          />
        )}

        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
