import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-banner text-white position-relative overflow-hidden">
      <div className="container-fluid container-xl">
        <div className="row align-items-center min-vh-50 py-5">
          
          {/* Left Column: Text and Details */}
          <div className="col-lg-7 z-index-1">
            {/* Announcement Badge */}
            <div className="announcement-badge d-inline-block mb-3 px-3 py-1 bg-white text-dark rounded-pill fw-semibold">
              New Academic Year Started
            </div>
            
            {/* Main Heading */}
            <h1 className="hero-title fw-bold mb-4">
              Finding the right coaching for 2026-27?
            </h1>
            
            {/* Feature Checklists */}
            <div className="hero-features d-flex flex-wrap gap-4 mb-4">
              <div className="feature-item d-flex align-items-center gap-2">
                <span className="check-icon">✓</span>
                <span className="fw-medium">School Curriculum</span>
              </div>
              <div className="feature-item d-flex align-items-center gap-2">
                <span className="check-icon">✓</span>
                <span className="fw-medium">Maths & English Mastery</span>
              </div>
            </div>

            {/* Sub-Brand Text */}
            <p className="hero-subtext fs-5 opacity-90 fw-semibold">
              (Initiative of Physics Wallah)
            </p>
          </div>

          {/* Right Column: CTA Box & Banner Presentation */}
          <div className="col-lg-5 text-center text-lg-end mt-4 mt-lg-0">
            <div className="cta-box d-inline-block text-center p-4 bg-white text-dark rounded-4 shadow">
              <span className="cta-badge d-block mb-2 fw-bold text-uppercase">Demo Classes</span>
              <h2 className="cta-price fw-bold mb-0">Starting @ ₹9</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;