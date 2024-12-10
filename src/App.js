import { Footer, Header } from "./components/common";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <div className="dark:bg-darkbg">
      <Header />
      <main className="dark:bg-darkbg">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
