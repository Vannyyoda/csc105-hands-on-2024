import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FavoritesPage from "./pages/FavoritesPage";
import FavoritesDetail from "./pages/FavoritesDetail";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<NotFoundPage />} />
        <Route path="/fav" element={
          <>
            <Navbar />
            <FavoritesPage />
          </>
        } />
        <Route path="/fav/:id" element={
          <>
            <Navbar />
            <FavoritesDetail />
          </>
        } />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={
          <>
            <Navbar />
            <HomePage />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
