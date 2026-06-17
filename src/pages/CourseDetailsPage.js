import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleCourseAPI } from "../services/api"; // ✅ Points to your central api.js path

function CourseDetailsPage() {
  const { id } = useParams(); // URL se course id nikalne ke liye
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleCourseAPI(id)
      .then((response) => {
        // Laravel wrapper response structure check (status: true aur data object)
        if (response && response.status) {
          setCourse(response.data);
        } else {
          setCourse(response);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching single course details:", error);
        setLoading(false);
      });
  }, [id]);

  // 🔄 1. LOADING TEMPLATE
  if (loading) {
    return (
      <div className="text-center py-5" style={{ minHeight: "70vh", paddingTop: "15%" }}>
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted fw-medium">Loading batch metrics...</p>
      </div>
    );
  }

  // ❌ 2. ERROR / NOT FOUND TEMPLATE
  if (!course) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "60vh" }}>
        <i className="fa-solid fa-triangle-exclamation text-warning display-4 mb-3"></i>
        <h3 className="fw-bold text-dark">Batch Details Offline</h3>
        <p className="text-muted">The requested English learning program was not found or has expired.</p>
        <Link to="/" className="btn text-white px-4 mt-3" style={{ backgroundColor: "#5551E8", borderRadius: "8px" }}>
          Return to Home
        </Link>
      </div>
    );
  }

  // ✅ 3. MAIN RENDER TEMPLATE
  return (
    <div className="container py-5" style={{ fontFamily: "'Inter', sans-serif", color: "#181c32" }}>
      
      {/* Breadcrumb Navigation Track */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: "#5551E8" }}>Home</Link></li>
          <li className="breadcrumb-item"><Link to="/courses" className="text-decoration-none" style={{ color: "#5551E8" }}>Programs</Link></li>
          <li className="breadcrumb-item active text-truncate" aria-current="page" style={{ maxWidth: "250px" }}>{course.title}</li>
        </ol>
      </nav>

      <div className="row g-5">
        
        {/* Left Layout Column: Media Graphic & Content description */}
        <div className="col-lg-8">
          <div className="position-relative mb-4">
            <img 
              src={course.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"} 
              alt={course.title} 
              className="img-fluid w-100 shadow-sm" 
              style={{ borderRadius: "24px", maxHeight: "420px", objectFit: "cover" }} 
            />
            <span className="position-absolute badge bg-primary top-0 end-0 m-3 px-3 py-2 text-uppercase fw-bold shadow-sm" style={{ backgroundColor: "#5551E8", borderRadius: "8px" }}>
              {course.category?.name || "Spoken Hub"}
            </span>
          </div>
          
          <h1 className="fw-extrabold display-5 mb-3" style={{ fontWeight: "800", letterSpacing: "-1px" }}>
            {course.title}
          </h1>
          
          {/* Quick Metrics Badges strip */}
          <div className="d-flex flex-wrap align-items-center gap-4 text-muted mb-4 pb-3 border-bottom">
            <span><i className="fa-regular fa-clock me-2 text-primary" style={{ color: "#5551E8" }}></i><strong>Duration:</strong> {course.duration || "Flexible"}</span>
            <span><i className="fa-solid fa-user-tie me-2 text-primary" style={{ color: "#5551E8" }}></i><strong>Instructor:</strong> {course.instructor_name || "Certified Coach"}</span>
          </div>

          <h4 className="fw-bold mb-3 text-dark">Course Curriculum & Details</h4>
          <p className="text-secondary fs-5" style={{ lineHeight: "1.7", fontWeight: "400" }}>
            {course.description}
          </p>
        </div>

        {/* Right Layout Column: Pricing Context Action Card Box */}
        <div className="col-lg-4">
          <div className="card p-4 border shadow-sm position-sticky" style={{ borderRadius: "20px", backgroundColor: "#fff", top: "24px" }}>
            <span className="text-muted small d-block mb-1 fw-medium">Guaranteed Interactive Live Seats</span>
            <h2 className="fw-bold mb-4" style={{ color: "#5551E8", fontSize: "2.3rem" }}>
              ₹{course.price ? parseFloat(course.price).toFixed(0) : "0"}
            </h2>
            
            {/* Features list bullet layout inside right block */}
            <div className="bg-light p-3 mb-4" style={{ borderRadius: "12px" }}>
              <h6 className="fw-bold small mb-2 text-dark">
                <i className="fa-solid fa-shield-halved me-2 text-success"></i> Batch Perks Include:
              </h6>
              <ul className="list-unstyled small text-muted mb-0" style={{ lineHeight: "1.9" }}>
                <li><i className="fa-solid fa-check text-success me-2"></i> 1-on-1 Native Accent Feedback Session</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Access to recorded video backup library</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Globally recognized completion certificate</li>
              </ul>
            </div>

            <button className="btn btn-lg text-white w-100 py-3 shadow-sm fw-bold mb-2 transition-hover" style={{ backgroundColor: "#5551E8", borderRadius: "12px", fontSize: "1rem" }}>
              Secure Your Batch Slot
            </button>
            <span className="text-center text-muted d-block exact-small mt-2" style={{ fontSize: "0.75rem" }}>
              🛡️ Secure SSL encryption. Cancel or shift anytime.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseDetailsPage;