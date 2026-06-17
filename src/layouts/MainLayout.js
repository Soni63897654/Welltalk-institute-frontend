import React from 'react';
import Header from '../components/Header/Header'; // ✅ Aapka original header safe hai
import Footer from '../components/Footer/Footer'; // ✅ Naya nested footer connect ho gaya
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    // 'd-flex flex-column min-vh-100' lagane se footer hamesha screen ke bottom par chipka rahega
    <div className="d-flex flex-column min-vh-100">
      
      {/* 1. Global Navigation Header sits at the very top */}
      <Header />
      
      {/* 2. Responsive Bootstrap wrapper container for child routes */}
      {/* 'flex-grow-1' se beech ka content bacha hua poora space le lega */}
      <div className="container mt-3 flex-grow-1">
        <Outlet />
      </div>

      {/* 3. Global Unified Footer sits at the very bottom */}
      <Footer />

    </div>
  );
}

export default MainLayout;