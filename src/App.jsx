import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TopBar from "./components/TopBar";
import TopBarIcon from "./components/TopBarIcon";
import AppRoutes from "./routers/AppRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <section className="app-navigation">
        <Navigation />
      </section>
      <section className="app-container">
        <AppRoutes />
      </section>
      <section className="app-footer">
        <Footer />
      </section>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
