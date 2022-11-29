import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ConnectModal from "./components/modals/ConnectModal";
import Home from "./pages/Home";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogTermsOfService from "./pages/BlogTermsOfService";
import BlogPrivacyPolicy from "./pages/BlogPrivacyPolicy";
import Creators from "./pages/Creators";
import OurStory from "./pages/OurStory";
import PostModal from "./components/modals/PostModal";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<OurStory />} />

          <Route path="/creators" element={<Creators />} />

          <Route
            path="/blog-terms-of-service"
            element={<BlogTermsOfService />}
          />

          <Route path="/blog-privacy-policy" element={<BlogPrivacyPolicy />} />

          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <PostModal />
        <ConnectModal />
      </Router>

      <ToastContainer position="top-center" transition={Slide} />
    </>
  );
}

export default App;
