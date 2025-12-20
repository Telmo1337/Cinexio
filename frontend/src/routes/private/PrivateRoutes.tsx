// src/routes/private/PrivateRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Movies from "../../pages/app/Movies";
import { PrivateRoute } from "../PrivateRoute";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path="movies"
        element={
          <PrivateRoute roles={["MEMBER"]}>
            <Movies />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
