import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ConnectModal from "./components/modals/ConnectModal";
import Home from "./pages/Home";
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ConnectModal />
      </Router>
    </div>
  );
}

export default App;
