import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  FaqPage,
  HomePage,
  LoginPage,
  PageNotFound,
  ProductDetailPage,
  ProductPage,
  RegisterPage,
} from "../pages";
import PATH from "../constants/path";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage title="Home" />} />
      <Route path={PATH.home} element={<HomePage title="Home" />} />
      <Route path={PATH.login} element={<LoginPage title="Login" />} />
      <Route path={PATH.register} element={<RegisterPage title="Register" />} />
      <Route path={PATH.faq} element={<FaqPage title="FAQs" />} />
      <Route
        path={PATH.cart}
        element={
          <ProtectedRoute>
            <CartPage title="Cart" />
          </ProtectedRoute>
        }
      />
      <Route path={PATH.products} element={<ProductPage title="Product List" />} />
      <Route
        path={`${PATH.products}/:id`}
        element={<ProductDetailPage title="Product Details" />}
      />
      <Route path="*" element={<PageNotFound title="Page Not Found" />} />
    </Routes>
  );
};

export default AppRoutes;
