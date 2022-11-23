import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ConnectModal from "./components/modals/ConnectModal";
import Home from "./pages/Home";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogTermsOfService from "./pages/BlogTermsOfService";
import BlogPrivacyPolicy from "./pages/BlogPrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            path="/blog-terms-of-service"
            element={<BlogTermsOfService />}
          />
        </Routes>
        <Routes>
          <Route path="/blog-privacy-policy" element={<BlogPrivacyPolicy />} />
        </Routes>
        <ConnectModal />
      </Router>
      <ToastContainer position="top-center" transition={Slide} />
    </>
  );
}

export default App;
