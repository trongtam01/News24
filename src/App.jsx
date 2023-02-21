import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
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
        position="top-right"
        autoClose={1500}
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
