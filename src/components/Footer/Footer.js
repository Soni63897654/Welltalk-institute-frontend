import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top border-secondary" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="container">
        <div className="row g-4">
          
          {/* Column 1: Brand Pitch */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-extrabold mb-3" style={{ color: "#ffffff", fontWeight: "800" }}>WellTalk.</h4>
            <p className="text-white-50 small" style={{ lineHeight: "1.6" }}>
              Empowering professionals and students with real live 1-on-1 English speaking practice sessions. Erase your stage fear forever.
            </p>
            <div className="d-flex gap-3 fs-5 mt-3 text-muted">
              <i className="fa-brands fa-facebook cursor-pointer custom-hover-icon"></i>
              <i className="fa-brands fa-instagram cursor-pointer custom-hover-icon"></i>
              <i className="fa-brands fa-linkedin cursor-pointer custom-hover-icon"></i>
              <i className="fa-brands fa-youtube cursor-pointer custom-hover-icon"></i>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-uppercase small tracking-wider mb-3 text-white-50">Explore</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-decoration-none custom-footer-link">Home Dashboard</Link></li>
              <li><Link to="/courses" className="text-decoration-none custom-footer-link">English Batches</Link></li>
              <li><Link to="/about" className="text-decoration-none custom-footer-link">Our Legacy</Link></li>
              <li><Link to="/contact" className="text-decoration-none custom-footer-link">Help Desk</Link></li>
            </ul>
          </div>

          {/* Column 3: Management */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold text-uppercase small tracking-wider mb-3 text-white-50">Management</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/profile" className="text-decoration-none custom-footer-link">User Profile</Link></li>
              <li><Link to="/add" className="text-decoration-none custom-footer-link">Add Program</Link></li>
              <li><Link to="/login" className="text-decoration-none custom-footer-link">Student Login</Link></li>
              <li><Link to="/register" className="text-decoration-none custom-footer-link">Enroll Free</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Core Metrics */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold text-uppercase small tracking-wider mb-3 text-white-50">Support Desk</h6>
            <p className="small text-secondary mb-2"><i className="fa-solid fa-location-dot me-2"></i> Tech Park, Sector 62, Noida, UP</p>
            <p className="small text-secondary mb-2"><i className="fa-solid fa-phone me-2"></i> +91 98765 43210</p>
            <p className="small text-secondary mb-0"><i className="fa-solid fa-envelope me-2"></i> support@welltalk.com</p>
          </div>

        </div>

        <hr className="my-4 border-secondary opacity-25" />

        {/* Copyright Row */}
        <div className="row small text-secondary">
          <div className="col-md-6 text-center text-md-start">
            &copy; 2026 WellTalk Systems Private Limited. All Rights Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            Made with <i className="fa-solid fa-heart text-danger mx-1"></i> for Fluency.
          </div>
        </div>
      </div>

      {/* Scoped Local CSS */}
      <style>{`
        .custom-footer-link { transition: color 0.2s ease; color: #a0a0a0 !important; }
        .custom-footer-link:hover { color: #5551E8 !important; }
        .custom-hover-icon { transition: color 0.2s ease; cursor: pointer; }
        .custom-hover-icon:hover { color: #5551E8 !important; }
      `}</style>
    </footer>
  );
}

export default Footer;