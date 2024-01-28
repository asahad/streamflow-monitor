import { Outlet } from "react-router-dom"; // Import Outlet
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />{" "}
        {/* This replaces <HomePage /> to allow for routed components */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
