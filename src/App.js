import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Core Page Components
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage"; 
import CourseDetailsPage from "./pages/CourseDetailsPage"; 
import AboutUsPage from "./pages/AboutUsPage";       // 🆕 Imported About Us
import ContactUsPage from "./pages/ContactUsPage";   // 🆕 Imported Contact Us
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

// Authentication Page Components
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

// Route Guards (Security Middleware)
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Shared Layout Group: These routes will display the common Header/Navbar */}
      <Route element={<MainLayout />}>
        
        {/* Public Homepage Route */}
        <Route path="/" element={<Home />} />
        
        {/* Public English Speaking Batches Listing Route */}
        <Route path="/courses" element={<CoursesPage />} /> 
        
        {/* Dynamic Course Details Route */}
        <Route path="/courses/:id" element={<CourseDetailsPage />} /> 

        {/* 🆕 Registered Public Pages Route */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />

        {/* 🔒 Secured User Profile Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Guarded Admin Route: Creating products (Requires Login Token) */}
        <Route
          path="/add"
          element = {
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        {/* Guarded Admin Route: Updating existing products (Requires Login Token) */}
        <Route
          path="/update"
          element = {
            <ProtectedRoute>
              <UpdateProduct />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Standalone Authentication Screen Routes (They bypass MainLayout entirely) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

    </Routes>
  );
}

export default App;