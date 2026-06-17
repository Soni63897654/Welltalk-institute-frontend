import React from "react";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="container py-5" style={{ fontFamily: "'Inter', sans-serif", color: "#181c32" }}>
      
      {/* TOP HEADER SECTION */}
      <div className="text-center mb-5">
        <span className="badge px-3 py-2 text-primary mb-3 fw-semibold" style={{ backgroundColor: "#5551E815", color: "#5551E8", borderRadius: "30px" }}>
          👤 Profile Dashboard
        </span>
        <h2 className="fw-extrabold display-6 m-0" style={{ fontWeight: "800" }}>
          Welcome back, {user?.name || "User"}!
        </h2>
        <p className="text-muted mt-2">Manage your account credentials and personal preferences from here.</p>
      </div>

      <div className="row g-5">
        
        {/* LEFT LAYOUT: USER AVATAR & QUICK STATS */}
        <div className="col-lg-4">
          <div className="bg-light p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center" style={{ borderRadius: "24px" }}>
            
            {/* User Initials Avatar Circle */}
            <div className="text-white rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm" 
                 style={{ width: "90px", height: "90px", backgroundColor: "#5551E8", fontSize: "2rem", fontWeight: "700" }}>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            <h4 className="fw-bold text-dark mb-1">{user?.name || "Full Name"}</h4>
            <p className="text-muted small mb-4">{user?.email || "email@example.com"}</p>
            
            {/* Status Badge */}
            <span className="badge px-3 py-2 fw-semibold text-success bg-success-subtle rounded-pill" style={{ color: "#198754", backgroundColor: "#19875415", fontSize: "0.85rem" }}>
              <i className="fa-solid fa-circle-check me-1"></i> Verified Account
            </span>
          </div>
        </div>

        {/* RIGHT LAYOUT: ACCOUNT DETAILS */}
        <div className="col-lg-8">
          <div className="card p-4 border border-light shadow-sm" style={{ borderRadius: "24px" }}>
            <h4 className="fw-bold mb-4">Account Information</h4>
            
            <div className="row g-4">
              {/* Full Name Field */}
              <div className="col-md-6">
                <label className="form-label small fw-medium text-secondary">Registered Name</label>
                <div className="p-3 bg-light d-flex align-items-center gap-2" style={{ borderRadius: "10px", fontWeight: "600" }}>
                  <i className="fa-regular fa-user text-muted"></i>
                  <span>{user?.name || "Not Available"}</span>
                </div>
              </div>
              
              {/* Email Field */}
              <div className="col-md-6">
                <label className="form-label small fw-medium text-secondary">Email Address</label>
                <div className="p-3 bg-light d-flex align-items-center gap-2" style={{ borderRadius: "10px", fontWeight: "600", wordBreak: "break-word" }}>
                  <i className="fa-regular fa-envelope text-muted"></i>
                  <span>{user?.email || "Not Available"}</span>
                </div>
              </div>

              {/* Portal Access */}
              <div className="col-md-6">
                <label className="form-label small fw-medium text-secondary">Portal Access Type</label>
                <div className="p-3 bg-light d-flex align-items-center gap-2" style={{ borderRadius: "10px", fontWeight: "600" }}>
                  <i className="fa-solid fa-graduation-cap text-muted"></i>
                  <span>Student Workspace</span>
                </div>
              </div>

              {/* Security Tier */}
              <div className="col-md-6">
                <label className="form-label small fw-medium text-secondary">Security Status</label>
                <div className="p-3 bg-light d-flex align-items-center gap-2" style={{ borderRadius: "10px", fontWeight: "600" }}>
                  <i className="fa-solid fa-shield-halved text-muted"></i>
                  <span>2FA Enabled</span>
                </div>
              </div>
            </div>

            <hr className="my-4" style={{ opacity: "0.1", borderColor: "#181c32" }} />

            {/* SECURITY INFOTEXT BOX */}
            <div className="d-flex align-items-center gap-3 p-3 text-start" style={{ backgroundColor: "#5551E808", borderRadius: "16px", border: "1px dashed #5551E830" }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "40px", height: "40px", backgroundColor: "#5551E815" }}>
                <i className="fa-solid fa-lock" style={{ color: "#5551E8" }}></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0" style={{ fontSize: "0.9rem" }}>Privacy Protected Zone</h6>
                <p className="text-muted small mb-0">Your profile logs are fully encrypted. Reach support desk to request any data modification.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;