import { Routes, Route } from "react-router-dom";
import { HomePage, ProductPage } from "../pages";
import PATH from "../constants/path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="Home" />} />
      <Route path={PATH.products} element={<ProductPage title="Product Page" />} />
    </Routes>
  );
};

export default AppRoutes;
