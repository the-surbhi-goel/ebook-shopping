import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="All Post" />} />
    </Routes>
  );
};

export default AppRoutes;
