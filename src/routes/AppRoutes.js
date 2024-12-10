import { Routes, Route } from "react-router-dom";
import { FaqPage, HomePage, ProductPage } from "../pages";
import PATH from "../constants/path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="Home" />} />
      <Route path={PATH.faq} element={<FaqPage title="FAQs" />} />
      <Route path={PATH.products} element={<ProductPage title="Product List" />} />
    </Routes>
  );
};

export default AppRoutes;
