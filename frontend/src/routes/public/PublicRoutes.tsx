import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/public/Home";
import Register from "../../pages/public/Register";
import PublicNavbar from "../../components/navigation/PublicNavbar";
import Login from "../../pages/public/Login";



export default function PublicRoutes() {
  return (
    <PublicNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </PublicNavbar>
  );
}
