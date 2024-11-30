import Home from "./pages/home/Homee"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./pages/profile/Profile"
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>{" "}
    </Router>
  )
}

export default App
