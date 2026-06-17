import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  // Defensive price formatting fallback execution
  const formattedPrice = course.price ? parseFloat(course.price).toFixed(0) : "0";

  return (
    <div className="card h-100 border border-light p-3 shadow-sm transition-hover" 
         style={{ borderRadius: "20px", backgroundColor: "#fff" }}>
      
      {/* Top Graphic Header Area */}
      <div className="position-relative">
        <img 
          src={course.image_url || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400"} 
          className="w-100" 
          alt={course.title} 
          style={{ height: "190px", objectFit: "cover", borderRadius: "14px" }} 
        />
        <span className="position-absolute badge bg-white text-danger m-2 top-0 end-0 shadow-sm border px-2.5 py-1.5 text-uppercase fw-bold" 
              style={{ fontSize: '0.65rem', borderRadius: '8px', color: '#dc3545' }}>
          {course.category?.name || "Interactive"}
        </span>
      </div>

      {/* Main Metadata Section Area */}
      <div className="card-body pt-3 px-1 d-flex flex-column">
        <h5 className="fw-bold mb-2 text-dark text-truncate" title={course.title}>
          {course.title}
        </h5>
        
        {/* Tutor & Time metrics panel */}
        <div className="d-flex align-items-center gap-3 text-muted small mb-3 fw-medium">
          <span><i className="fa-regular fa-clock me-1 text-danger"></i> {course.duration || "N/A"}</span>
          <span>•</span>
          <span><i className="fa-regular fa-user me-1 text-danger"></i> {course.instructor_name || "Expert Guide"}</span>
        </div>
        
        <p className="text-muted small flex-grow-1 mb-4 text-truncate-3" style={{ lineHeight: '1.5' }}>
          {course.description}
        </p>
        
        {/* Footer dynamic links container wrapper */}
        <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top border-light">
          <div>
            <span className="text-muted d-block" style={{ fontSize: "0.7rem", fontWeight: '500' }}>Full Access Price</span>
            <strong className="fs-4 fw-bold" style={{ color: "#dc3545" }}>₹{formattedPrice}</strong>
          </div>
          
          <Link to={`/courses/${course.id}`} 
                className="btn text-white btn-sm px-4 py-2" 
                style={{ backgroundColor: "#dc3545", borderRadius: "8px", fontWeight: "600", fontSize: '0.85rem' }}>
            View Details
          </Link>
        </div>
      </div>

      {/* Mini Inline scope for transition handling locally */}
      <style>{`
        .text-truncate-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
        .transition-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .transition-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(220, 53, 69, 0.08) !important; }
      `}</style>
    </div>
  );
}

export default CourseCard;