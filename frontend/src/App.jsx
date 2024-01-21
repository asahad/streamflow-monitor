import HomePage from "./components/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => {
  return (
      <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
          <HomePage />
          </main>
          <Footer />
      </div>
  );
};

export default App;
