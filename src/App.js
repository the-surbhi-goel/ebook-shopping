import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header } from "./components/common";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="dark:bg-gray-700">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
