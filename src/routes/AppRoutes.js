import { Routes, Route } from "react-router-dom";
import { FaqPage, HomePage, ProductDetailPage, ProductPage } from "../pages";
import PATH from "../constants/path";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="Home" />} />
      <Route path={PATH.faq} element={<FaqPage title="FAQs" />} />
      <Route path={PATH.products} element={<ProductPage title="Product List" />} />
      <Route path={`${PATH.products}/:id`} element={<ProductDetailPage title="Product Details" />} />
      
    </Routes>
  );
};

export default AppRoutes;
