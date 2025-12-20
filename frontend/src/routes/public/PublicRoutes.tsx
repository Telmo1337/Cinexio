import { Routes, Route } from "react-router-dom";
import PublicLayout from "../../layouts/public/PublicLayout";
import { Home } from "../../pages/public/Home";

export default function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Outras páginas públicas */}
      </Routes>
    </PublicLayout>
  );
}
