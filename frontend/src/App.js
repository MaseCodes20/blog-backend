import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { allUsers } from "./features/users/usersSlice";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { allPosts } from "./features/post/postsSlice";

const OurStory = lazy(() => import("./pages/OurStory"));
const Creators = lazy(() => import("./pages/Creators"));
const PostPage = lazy(() => import("./pages/PostPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const AuthorProfilePage = lazy(() => import("./pages/AuthorProfilePage"));
const BlogTermsOfService = lazy(() => import("./pages/BlogTermsOfService"));
const BlogPrivacyPolicy = lazy(() => import("./pages/BlogPrivacyPolicy"));
const TagsPage = lazy(() => import("./pages/TagsPage"));
const LikesPage = lazy(() => import("./pages/LikesPage"));
const BookmarksPage = lazy(() => import("./pages/BookmarksPage"));
const FollowingPage = lazy(() => import("./pages/FollowingPage"));
const PostModal = lazy(() => import("./components/modals/postModal/PostModal"));
const ShareModal = lazy(() =>
  import("./components/modals/shareModal/ShareModal")
);
const EditProfileModal = lazy(() =>
  import("./components/modals/editProfileModal/EditProfileModal")
);
const ConnectModal = lazy(() =>
  import("./components/modals/connectModal/ConnectModal")
);

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

          <Route
            path="/about"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <OurStory />
              </Suspense>
            }
          />

          <Route
            path="/creators"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Creators />
              </Suspense>
            }
          />

          <Route
            path="/post/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <PostPage />
              </Suspense>
            }
          />

          <Route
            path="/profile/:id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <AuthorProfilePage />
              </Suspense>
            }
          />

          <Route
            path="/blog-terms-of-service"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <BlogTermsOfService />
              </Suspense>
            }
          />

          <Route
            path="/blog-privacy-policy"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <BlogPrivacyPolicy />
              </Suspense>
            }
          />

          <Route
            path="/tags"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                {" "}
                <TagsPage />
              </Suspense>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <ProfilePage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <BookmarksPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/likes"
            element={
              <ProtectedRoute>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <LikesPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/following"
            element={
              <ProtectedRoute>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <FollowingPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>

        <Suspense fallback={<h1>Loading...</h1>}>
          <PostModal />
        </Suspense>

        <Suspense fallback={<h1>Loading...</h1>}>
          <ShareModal />
        </Suspense>

        <Suspense fallback={<h1>Loading...</h1>}>
          <EditProfileModal />
        </Suspense>

        <Suspense fallback={<h1>Loading...</h1>}>
          <ConnectModal />
        </Suspense>
      </Router>

      <ToastContainer position="top-center" transition={Slide} />
    </>
  );
}

export default App;
