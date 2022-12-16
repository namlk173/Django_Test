import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import { HomePage, LoginPage } from "../pages";

const RoutesPage = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <>
      <Routes>
        <Route
          element={!user ? <Navigate to="/login" /> : <HomePage />}
          path="/"
          exact
        />
        <Route
          element={!user ? <LoginPage /> : <Navigate to="/" />}
          path="/login"
        />
      </Routes>
    </>
  );
};

export default RoutesPage;
