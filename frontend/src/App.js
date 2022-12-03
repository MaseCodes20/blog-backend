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
import ProtectedRoute from "./components/ProtectedRoute";
import PostPage from "./pages/PostPage";
import AuthorProfilePage from "./pages/AuthorProfilePage";
import { allUsers } from "./features/users/usersSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allPosts } from "./features/post/postsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
    dispatch(allPosts());
  }, []);
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<OurStory />} />

          <Route path="/creators" element={<Creators />} />

          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/profile/:id" element={<AuthorProfilePage />} />

          <Route
            path="/blog-terms-of-service"
            element={<BlogTermsOfService />}
          />

          <Route path="/blog-privacy-policy" element={<BlogPrivacyPolicy />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <PostModal />
        <ConnectModal />
      </Router>

      <ToastContainer position="top-center" transition={Slide} />
    </>
  );
}

export default App;
