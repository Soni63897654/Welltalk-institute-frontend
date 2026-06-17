import React from "react";
import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "'Inter', sans-serif", color: "#181c32" }}>
      
      {/* HEADER HERO AREA */}
      <section className="py-5 text-center" style={{ background: "linear-gradient(180deg, #dc354508 0%, #ffffff 100%)" }}>
        <div className="container py-4">
          <span className="badge px-3 py-2 text-white mb-3 fw-semibold" style={{ backgroundColor: "#dc3545", borderRadius: "30px", fontSize: "0.85rem" }}>
            🚀 Our Journey & Vision
          </span>
          <h1 className="fw-extrabold display-4 mb-3" style={{ fontWeight: "800", letterSpacing: "-1px" }}>
            Revolutionizing English <br />
            <span style={{ color: "#dc3545" }}>Fluency Internationally.</span>
          </h1>
          <p className="text-secondary fs-5 mx-auto mb-0" style={{ maxWidth: "650px", lineHeight: "1.6" }}>
            WellTalk was founded with a single mission: to smash communication barriers and make premium, 1-on-1 English learning affordable for everyone.
          </p>
        </div>
      </section>

      {/* CORE VISION SECTION */}
      <section className="py-5 container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600" 
              alt="Our Core Team Working" 
              className="img-fluid shadow-lg" 
              style={{ borderRadius: "24px" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3 fs-1">Why WellTalk Exists</h2>
            <p className="text-muted fs-5 mb-4">
              Traditional classrooms focus too much on theoretical grammar rules and very little on actual live conversation. We flipped the script by offering an ecosystem where you learn by speaking naturally with certified global experts.
            </p>
            <div className="row g-4">
              <div className="col-sm-6">
                <h5 className="fw-bold text-dark"><i className="fa-solid fa-bullseye me-2" style={{ color: "#dc3545" }}></i> Our Mission</h5>
                <p className="small text-muted">To empower 1 Million+ working professionals and students with public speaking confidence.</p>
              </div>
              <div className="col-sm-6">
                <h5 className="fw-bold text-dark"><i className="fa-solid fa-eye me-2" style={{ color: "#dc3545" }}></i> Our Vision</h5>
                <p className="small text-muted">To build India's most loved, tech-driven dynamic live interaction learning system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STATS BAND */}
      <section className="py-5 my-4" style={{ backgroundColor: "#dc354503", borderTop: "1px solid #dc354510", borderBottom: "1px solid #dc354510" }}>
        <div className="container text-center">
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <h1 className="fw-extrabold display-5 m-0" style={{ color: "#dc3545", fontWeight: "800" }}>10K+</h1>
              <span className="text-muted small fw-medium">Active Learners</span>
            </div>
            <div className="col-md-3 col-6">
              <h1 className="fw-extrabold display-5 m-0" style={{ color: "#dc3545", fontWeight: "800" }}>200+</h1>
              <span className="text-muted small fw-medium">Certified Mentors</span>
            </div>
            <div className="col-md-3 col-6">
              <h1 className="fw-extrabold display-5 m-0" style={{ color: "#dc3545", fontWeight: "800" }}>500K+</h1>
              <span className="text-muted small fw-medium">Live Speech Hours</span>
            </div>
            <div className="col-md-3 col-6">
              <h1 className="fw-extrabold display-5 m-0" style={{ color: "#dc3545", fontWeight: "800" }}>95%</h1>
              <span className="text-muted small fw-medium">Success Transition</span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default AboutUsPage;