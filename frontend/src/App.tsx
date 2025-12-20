import PublicRoutes from "./routes/public/PublicRoutes";
import PrivateRoutes from "./routes/private/PrivateRoutes";
import AdminRoutes from "./routes/admin/AdminRoutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/app/*" element={<PrivateRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default App;
