import React, { useState } from "react";

function ContactUsPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submission data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Inter', sans-serif", color: "#181c32" }}>
      
      {/* TOP HEADER SECTION */}
      <div className="text-center mb-5">
        <span className="badge px-3 py-2 mb-3 fw-semibold" style={{ backgroundColor: "#dc354515", color: "#dc3545", borderRadius: "30px" }}>
          📬 Get In Touch
        </span>
        <h2 className="fw-extrabold display-6 m-0" style={{ fontWeight: "800" }}>We'd love to hear from you</h2>
        <p className="text-muted mt-2">Have questions about our batches? Drop us a message instantly.</p>
      </div>

      <div className="row g-5">
        
        {/* LEFT LAYOUT: CONTACT DETAILS INFO */}
        <div className="col-lg-5">
          <div className="bg-light p-4 h-100" style={{ borderRadius: "24px" }}>
            <h4 className="fw-bold text-dark mb-4">Contact Information</h4>
            
            <div className="d-flex gap-3 mb-4">
              <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#dc3545" }}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">Headquarters Office:</h6>
                <p className="text-muted small mb-0">A-12, 4th Floor, Tech Park, Sector 62, Noida, UP - 201301</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#dc3545" }}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">Call Support Desk:</h6>
                <p className="text-muted small mb-0">+91 98765 43210 (Mon-Sat, 9 AM - 7 PM)</p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <div className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#dc3545" }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-0">Email Queries Inbox:</h6>
                <p className="text-muted small mb-0">support@welltalk.com / info@welltalk.com</p>
              </div>
            </div>

            {/* EMBEDDED MAP BOUNDARY CONTAINER */}
            <div className="overflow-hidden mt-4 shadow-sm border border-white" style={{ borderRadius: "16px", height: "180px" }}>
              <iframe 
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5621437691666!2d77.36015697550117!3d28.61291197567406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54ebb855555%3A0x7cc5a300d810a950!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT LAYOUT: SUBMISSION FORM CARD */}
        <div className="col-lg-7">
          <div className="card p-4 border border-light shadow-sm" style={{ borderRadius: "24px" }}>
            <h4 className="fw-bold mb-3">Send a Message</h4>
            
            {submitted && (
              <div className="alert alert-success d-flex align-items-center gap-2 mb-4" style={{ borderRadius: "10px" }}>
                <i className="fa-solid fa-circle-check fs-5"></i>
                <div><strong>Thank you!</strong> Your request has been logged successfully. Our team will contact you back shortly.</div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-medium text-secondary">Full Name</label>
                  <input type="text" className="form-control p-2" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ borderRadius: "8px" }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-medium text-secondary">Email Address</label>
                  <input type="email" className="form-control p-2" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ borderRadius: "8px" }} />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-medium text-secondary">Subject Topic</label>
                  <input type="text" className="form-control p-2" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} style={{ borderRadius: "8px" }} />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-medium text-secondary">Detailed Message</label>
                  <textarea className="form-control p-2" rows="4" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ borderRadius: "8px" }}></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn text-white px-5 py-2.5 fw-semibold" style={{ backgroundColor: "#dc3545", borderRadius: "10px" }}>
                    Send Message <i className="fa-regular fa-paper-plane ms-2 small"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUsPage;