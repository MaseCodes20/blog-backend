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
import Spinner from "./components/spinners/Spinner";

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
              <Suspense fallback={<Spinner />}>
                <OurStory />
              </Suspense>
            }
          />

          <Route
            path="/creators"
            element={
              <Suspense fallback={<Spinner />}>
                <Creators />
              </Suspense>
            }
          />

          <Route
            path="/post/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <PostPage />
              </Suspense>
            }
          />

          <Route
            path="/profile/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <AuthorProfilePage />
              </Suspense>
            }
          />

          <Route
            path="/blog-terms-of-service"
            element={
              <Suspense fallback={<Spinner />}>
                <BlogTermsOfService />
              </Suspense>
            }
          />

          <Route
            path="/blog-privacy-policy"
            element={
              <Suspense fallback={<Spinner />}>
                <BlogPrivacyPolicy />
              </Suspense>
            }
          />

          <Route
            path="/tags"
            element={
              <Suspense fallback={<Spinner />}>
                {" "}
                <TagsPage />
              </Suspense>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <ProfilePage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <BookmarksPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/likes"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <LikesPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/following"
            element={
              <ProtectedRoute>
                <Suspense fallback={<Spinner />}>
                  <FollowingPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>

        <Suspense fallback={<Spinner />}>
          <PostModal />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <ShareModal />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <EditProfileModal />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <ConnectModal />
        </Suspense>
      </Router>

      <ToastContainer position="top-center" transition={Slide} />
    </>
  );
}

export default App;
