import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
