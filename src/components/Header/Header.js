import React, { memo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

// Import brand assets
import logoImg from '../../assets/logo.png'; 

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  
  // Clean active route toggler classes
  const isActiveRoute = (path) => location.pathname === path ? "text-danger fw-bold" : "text-secondary fw-semibold";
  const isSubActiveRoute = (path) => location.pathname === path ? "text-danger fw-bold" : "text-muted";
  
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to secure sign-out?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className="wt-header-wrapper sticky-top bg-white shadow-sm" style={{ borderBottom: "1px solid #f1f3f7" }}>
      
      {/* SECTION A: PRIMARY BRAND & UTILITY LAYER */}
      <header className="wt-primary-header py-3 border-bottom border-light">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Upgraded & Scaled Brand Engine Layout */}
          <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none" aria-label="WellTalk Home">
            <img 
              src={logoImg} 
              alt="WellTalk Institute Logo" 
              className="img-fluid transition-hover" 
              style={{ 
                height: '52px', 
                width: 'auto', 
                objectFit: 'contain',
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))'
              }} 
            />
          </Link>

          {/* Desktop Primary Nav Layout */}
          <nav className="d-none d-md-flex align-items-center gap-4" aria-label="Primary Navigation">
            <Link to="/" className={`text-decoration-none ${isActiveRoute("/")}`} style={{ fontSize: '1rem', transition: 'color 0.2s' }}>Home</Link>
            <Link to="/courses" className={`text-decoration-none ${isActiveRoute("/courses")}`} style={{ fontSize: '1rem', transition: 'color 0.2s' }}>Explore Courses</Link>
            <Link to="/about" className={`text-decoration-none ${isActiveRoute("/about")}`} style={{ fontSize: '1rem', transition: 'color 0.2s' }}>About Us</Link>
            <Link to="/contact" className={`text-decoration-none ${isActiveRoute("/contact")}`} style={{ fontSize: '1rem', transition: 'color 0.2s' }}>Contact</Link>
          </nav>

          {/* Right Action Matrix */}
          <div className="d-flex align-items-center gap-3">
            {user ? (
              <div className="dropdown">
                <button 
                  className="btn border-0 bg-transparent p-0 d-flex align-items-center" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <i className="fa-solid fa-circle-user text-danger fs-2"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-2" style={{ borderRadius: '14px', minWidth: '200px' }}>
                  <li className="px-3 py-2 border-bottom mb-2">
                    <span className="text-muted d-block small" style={{ fontSize: '0.75rem' }}>Logged account</span>
                    <strong className="text-dark fs-6">{user?.name || 'User'}</strong>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded py-2 text-secondary" to="/profile">
                      <i className="fa-regular fa-user me-2 text-muted"></i> My Profile
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider opacity-25" /></li>
                  <li>
                    <button className="dropdown-item text-danger rounded py-2 fw-semibold" onClick={handleLogout}>
                      <i className="fa-solid fa-arrow-right-from-bracket me-2"></i> Secure Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="btn btn-danger px-4 py-2.5 fw-bold text-white text-decoration-none shadow-sm wt-premium-btn"
                style={{ borderRadius: '12px', backgroundColor: '#dc3545', fontSize: '0.9rem', border: 'none', letterSpacing: '0.3px' }}
              >
                Login / Register
              </Link>
            )}

            {/* Accessible Hamburger Controller */}
            <button 
              className="btn btn-light d-md-none border-0 p-2 rounded-3" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#mobileNavigation"
            >
              <i className="fa-solid fa-bars-staggered fs-4 text-dark"></i>
            </button>
          </div>
        </div>
      </header>

      {/* SECTION B: SECONDARY NAVIGATION STRIP */}
      <div className="wt-sub-header d-none d-md-block py-2" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container d-flex align-items-center gap-4">
          
          {/* Focus Areas Dropdown with Chevron Down Icon */}
          <div className="dropdown d-flex align-items-center">
            <button 
              className="btn btn-sm btn-dark fw-bold px-3 py-2 text-uppercase d-flex align-items-center gap-2 shadow-xs" 
              type="button" 
              data-bs-toggle="dropdown" 
              style={{ borderRadius: '8px', fontSize: '0.75rem', border: 'none', backgroundColor: '#1c1c21' }}
            >
              <i className="fa-solid fa-bars-staggered"></i> Focus Areas <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: "0.65rem" }}></i>
            </button>
            <ul className="dropdown-menu shadow border-0 mt-2 p-2" style={{ borderRadius: '12px' }}>
              <li><Link className="dropdown-item py-2 rounded" to="/courses/spoken-english"><i className="fa-solid fa-comments me-2 text-success"></i> Spoken English</Link></li>
              <li><Link className="dropdown-item py-2 rounded" to="/courses/grammar"><i className="fa-solid fa-book me-2 text-danger"></i> English Grammar</Link></li>
              <li><Link className="dropdown-item py-2 rounded" to="/courses/ielts"><i className="fa-solid fa-graduation-cap me-2 text-warning"></i> IELTS / PTE Prep</Link></li>
              <li><Link className="dropdown-item py-2 rounded" to="/courses/corporate-skills"><i className="fa-solid fa-briefcase me-2 text-info"></i> Corporate Soft Skills</Link></li>
            </ul>
          </div>

          {/* Sub Navigation Anchor Lists */}
          <nav className="wt-sub-nav d-flex align-items-center gap-4" aria-label="Secondary Navigation" style={{ fontSize: '0.85rem' }}>
            <Link to="/courses/stage-fear" className={`text-decoration-none ${isSubActiveRoute("/courses/stage-fear")}`}>
              Stage Fear Removal
            </Link>
            <Link to="/courses/public-speaking" className={`text-decoration-none ${isSubActiveRoute("/courses/public-speaking")}`}>
               Public Speaking
            </Link>
            <Link to="/courses/personality-development" className={`text-decoration-none ${isSubActiveRoute("/courses/personality-development")}`}>
               Personality Bootcamps
            </Link>
            <Link to="/courses/corporate-training" className={`text-decoration-none ${isSubActiveRoute("/courses/corporate-training")}`}>
               Corporate Training
            </Link>
            <Link to="/video-gallery" className="text-decoration-none text-danger fw-bold">
               Live Class Clips <span className="badge bg-danger-subtle text-danger p-1 rounded-circle animate-pulse" style={{ width: '6px', height: '6px', display: 'inline-block', marginLeft: '2px' }}></span>
            </Link>
          </nav>

          {/* Isolated Support Telephony Block */}
          <div className="ms-auto d-flex align-items-center">
            <span className="text-muted small fw-medium d-flex align-items-center" style={{ fontSize: '0.8rem' }}>
              <i className="fa-solid fa-headset text-danger me-2"></i>Support Block:&nbsp;<strong className="text-dark">+91 98765 43210</strong>
            </span>
          </div>
        </div>
      </div>

      {/* SECTION C: MOBILE RESPONSIVE ENGINE */}
      <div className="collapse d-md-none border-top bg-white" id="mobileNavigation">
        <div className="container py-3 d-flex flex-column gap-2">
          <span className="text-muted small fw-bold text-uppercase mb-1" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>Main Routes</span>
          <Link to="/" className="p-2 text-dark text-decoration-none fw-medium border-bottom border-light">Home</Link>
          <Link to="/courses" className="p-2 text-dark text-decoration-none fw-medium border-bottom border-light">Explore Courses</Link>
          <Link to="/about" className="p-2 text-dark text-decoration-none fw-medium border-bottom border-light">About Us</Link>
          <Link to="/contact" className="p-2 text-dark text-decoration-none fw-medium">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);