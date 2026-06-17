import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { getCoursesAPI } from "../services/api";

function Home() {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); 
  const [loading, setLoading] = useState(true);
  
  // Fee Estimator Widget State
  const [program, setProgram] = useState("spoken");
  const [timing, setTiming] = useState("weekend");

  useEffect(() => {
    getCoursesAPI()
      .then(response => {
        if (response && response.status) {
          setCourses(response.data);
        } else if (Array.isArray(response)) {
          setCourses(response);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching courses via central API:", error);
        setLoading(false);
      });
  }, []);

  const categories = ["all", ...new Set(courses.map(c => c.category?.name).filter(Boolean))];
  const filteredCourses = courses.filter(course => 
    activeTab === "all" || course.category?.name === activeTab
  ).slice(0, 3);

  // Dynamic Batch Estimator Calculation Data
  const batchDetails = {
    spoken: {
      weekday: { name: "Fluency Fast-Track Lab", price: "₹2,999", duration: "1 Month (Mon-Fri)", seats: "4 Seats left" },
      weekend: { name: "Weekend Corporate Bootcamp", price: "₹3,499", duration: "6 Weeks (Sat-Sun)", seats: "2 Seats left" }
    },
    grammar: {
      weekday: { name: "Core Grammar Foundation", price: "₹1,999", duration: "1 Month (Mon-Fri)", seats: "Available" },
      weekend: { name: "Advanced Executive Writing", price: "₹2,499", duration: "4 Weeks (Sat-Sun)", seats: "6 Seats left" }
    },
    ielts: {
      weekday: { name: "IELTS 8+ Band Masterclass", price: "₹4,999", duration: "2 Months (Mon-Fri)", seats: "1 Seat left 🔥" },
      weekend: { name: "IELTS Intensive Punch Batch", price: "₹5,499", duration: "8 Weeks (Sat-Sun)", seats: "3 Seats left" }
    }
  };

  const activeBatch = batchDetails[program][timing];

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "'Inter', sans-serif", color: "#1c1c21" }}>
      
      {/* SECTION 1: CINEMATIC EDGE-TO-EDGE IMAGE SLIDER (TEXT REMOVED FROM IMAGE LAYER) */}
      <section className="w-100 position-relative overflow-hidden shadow-sm" style={{ height: "420px" }}>
        <div id="heroWideBannerSlider" className="carousel slide carousel-fade h-100 w-100" data-bs-ride="carousel">
          
          {/* Indicators */}
          <div className="carousel-indicators" style={{ zIndex: "10" }}>
            <button type="button" data-bs-target="#heroWideBannerSlider" data-bs-slide-to="0" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#heroWideBannerSlider" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#heroWideBannerSlider" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner h-100">
            {/* Slide 1 - Cinematic Audience Backdrop */}
            <div className="carousel-item active h-100" data-bs-interval="3500">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop" 
                alt="Live Broadcast Public Speaking Masterclass Studio" 
                className="d-block w-100 h-100 object-cover" 
              />
            </div>
            
            {/* Slide 2 - Executive Podium Backdrop */}
            <div className="carousel-item h-100" data-bs-interval="3500">
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600&auto=format&fit=crop" 
                alt="Championship Podium Stage Practice Setup" 
                className="d-block w-100 h-100 object-cover" 
              />
            </div>
            
            {/* Slide 3 - Corporate Presentation Backdrop */}
            <div className="carousel-item h-100" data-bs-interval="3500">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop" 
                alt="Interactive Presentation Lab Group Drill" 
                className="d-block w-100 h-100 object-cover" 
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroWideBannerSlider" data-bs-slide="prev" style={{ zIndex: "11" }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroWideBannerSlider" data-bs-slide="next" style={{ zIndex: "11" }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </section>

      {/* SECTION 1B: CONTEXTUALLY UPGRADED CORE CONTENT ENGINE */}
      <section className="py-5 bg-white border-bottom">
        <div className="container text-center">
          <div className="mb-3">
            <span className="badge px-3 py-2 text-danger fw-bold shadow-sm" style={{ backgroundColor: "#dc354512", borderRadius: "30px", fontSize: "0.85rem", letterSpacing: "0.3px", border: "1px solid #dc354520" }}>
              ✨ India's Elite Public Speaking & Glossophobia Eradication Studio
            </span>
          </div>

          <h1 className="display-4 mb-3 fw-black" style={{ letterSpacing: "-1.5px", fontWeight: "900", color: "#0f1115" }}>
            Transform Fear Into <span style={{ color: "#dc3545" }}>Stage Performance.</span>
          </h1>

          <p className="fs-5 text-secondary mx-auto mb-4" style={{ fontWeight: "400", lineHeight: "1.65", color: "#525660", maxWidth: "760px" }}>
            Crush stage fright, master corporate storytelling, and build an unshakeable workplace aura with our 80% practical-driven live interactive modules.
          </p>

          {/* Micro Guiders Checklist Blocks */}
          <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
            <div className="d-flex align-items-center gap-2 px-3 py-1.5 bg-light border rounded-pill shadow-xs">
              <i className="fa-solid fa-microphone text-danger"></i>
              <span className="text-dark small fw-semibold" style={{ fontSize: "0.85rem" }}>80% Practical Stage Drills</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-1.5 bg-light border rounded-pill shadow-xs">
              <i className="fa-solid fa-trophy text-warning"></i>
              <span className="text-dark small fw-semibold" style={{ fontSize: "0.85rem" }}>Monthly Championship Presentation Tours</span>
            </div>
            <div className="d-flex align-items-center gap-2 px-3 py-1.5 bg-light border rounded-pill shadow-xs">
              <i className="fa-solid fa-bolt text-success"></i>
              <span className="text-dark small fw-semibold" style={{ fontSize: "0.85rem" }}>Impromptu & Storytelling Drills</span>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
            <Link to="/register" className="btn btn-lg text-white px-5 py-3 shadow wt-premium-btn-danger" style={{ backgroundColor: "#dc3545", border: "none", borderRadius: "14px", fontWeight: "600", fontSize: "1rem" }}>
              Book Free Demo Session
            </Link>
            <Link to="/courses" className="btn btn-lg btn-light border px-4 py-3 wt-premium-btn-outline" style={{ borderRadius: "14px", fontWeight: "600", fontSize: "1rem", backgroundColor: "#fff", color: "#4a505e", borderColor: "#dcdfe6" }}>
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED INDIVIDUAL USER RATINGS & PROFILE REVIEWS STRIP */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 text-center text-lg-start">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-1 text-warning mb-2" style={{ fontSize: "0.85rem" }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className="fw-bold text-dark mb-2" style={{ letterSpacing: "-0.5px" }}>Real Student Reviews</h3>
              <p className="text-muted small mb-0" style={{ maxWidth: "280px" }}>See how working professionals transformed their fear into fluent command.</p>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-4 bg-light border border-light-subtle h-100 wt-review-card" style={{ borderRadius: "20px" }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white shadow-sm" style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)", fontSize: "0.85rem" }}>
                        AS
                      </div>
                      <div>
                        <h6 className="m-0 fw-bold text-dark" style={{ fontSize: "0.92rem" }}>Aman Sharma</h6>
                        <span className="text-muted tiny" style={{ fontSize: "0.75rem" }}>Senior Systems Engineer</span>
                      </div>
                      <div className="ms-auto bg-white border rounded-pill px-2.5 py-0.5 text-warning fw-bold small shadow-xs" style={{ fontSize: "0.78rem" }}>
                        ★ 5.0
                      </div>
                    </div>
                    <p className="text-secondary small mb-0" style={{ lineHeight: "1.55", color: "#4e525a" }}>
                      "Stage par jate hi mere haath kaanpne lagte the. Par WellTalk ki daily podium practice ne mera poora darr khatam kar diya. Truly incredible training model!"
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 bg-light border border-light-subtle h-100 wt-review-card" style={{ borderRadius: "20px" }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-dark shadow-sm" style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", fontSize: "0.85rem" }}>
                        RV
                      </div>
                      <div>
                        <h6 className="m-0 fw-bold text-dark" style={{ fontSize: "0.92rem" }}>Riya Verma</h6>
                        <span className="text-muted tiny" style={{ fontSize: "0.75rem" }}>Corporate HR Consultant</span>
                      </div>
                      <div className="ms-auto bg-white border rounded-pill px-2.5 py-0.5 text-warning fw-bold small shadow-xs" style={{ fontSize: "0.78rem" }}>
                        ★ 5.0
                      </div>
                    </div>
                    <p className="text-secondary small mb-0" style={{ lineHeight: "1.55", color: "#4e525a" }}>
                      "Mera communication bohot weak tha, par is program ke live exercises aur dynamic group drill setups ne meri corporate delivery aur delivery style ekdam polished kar di."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TRAINING PILLARS */}
      <section className="py-5 container">
        <div className="text-center mb-5">
          <span className="text-danger fw-bold text-uppercase small" style={{ letterSpacing: "1px" }}>What We Specialize In</span>
          <h2 className="fw-bold fs-1 mt-1">Our Core Transformation Modules</h2>
          <p className="text-muted">Scientifically designed practical modules to shift your confidence dynamics.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border border-light p-4 shadow-sm text-center transition-hover" style={{ borderRadius: "20px" }}>
              <div className="p-3 rounded-circle text-danger mx-auto mb-3" style={{ backgroundColor: "#dc354510", width: "65px", height: "65px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-microphone-lines fs-3"></i>
              </div>
              <h4 className="fw-bold mb-2">Public Speaking</h4>
              <p className="text-muted small mb-0">Master stage presence, body language, audience engagement, and speech structuring through regular physical podium practice sessions.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border border-light p-4 shadow-sm text-center transition-hover" style={{ borderRadius: "20px" }}>
              <div className="p-3 rounded-circle text-danger mx-auto mb-3" style={{ backgroundColor: "#dc354510", width: "65px", height: "65px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-bolt fs-3"></i>
              </div>
              <h4 className="fw-bold mb-2">Stage Fear Removal</h4>
              <p className="text-muted small mb-0">Overcome anxiety, shaking hands, and sudden blank-outs using our signature psychological comfort-zone expanding drills.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border border-light p-4 shadow-sm text-center transition-hover" style={{ borderRadius: "20px" }}>
              <div className="p-3 rounded-circle text-danger mx-auto mb-3" style={{ backgroundColor: "#dc354510", width: "65px", height: "65px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-user-tie fs-3"></i>
              </div>
              <h4 className="fw-bold mb-2">Personality Development</h4>
              <p className="text-muted small mb-0">Refine your overall aura, communication delivery, emotional intelligence, dressing sense, and workplace social etiquette.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC BATCH FINDER & FEE CALCULATOR WIDGET */}
      <section className="py-5" style={{ background: "linear-gradient(180deg, #ffffff 0%, #dc354504 100%)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge px-3 py-2 text-danger mb-2 fw-semibold" style={{ backgroundColor: "#dc354512", borderRadius: "30px" }}>
              ⚡ Live Seat & Fee Estimator
            </span>
            <h2 className="fw-bold fs-1">Find Your Perfect Batch In 10 Seconds</h2>
            <p className="text-muted">Select your goal and preferred timing allocation below to check current seat maps.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card p-4 p-md-5 border-0 shadow-lg" style={{ borderRadius: "24px", backgroundColor: "#ffffff" }}>
                <div className="row g-4 align-items-center">
                  <div className="col-md-6 border-end border-light pe-md-4">
                    <div className="mb-4">
                      <label className="form-label fw-semibold text-secondary small text-uppercase mb-2">1. Choose Learning Program</label>
                      <div className="d-flex flex-column gap-2">
                        <button className={`btn text-start px-3 py-3 d-flex justify-content-between align-items-center ${program === 'spoken' ? 'border border-danger text-danger fw-bold' : 'bg-light border-0 text-dark'}`} style={{ borderRadius: '12px', transition: 'all 0.2s' }} onClick={() => setProgram('spoken')}>
                          <span>🗣️ Spoken English & Podium Practice</span>
                          {program === 'spoken' && <i className="fa-solid fa-circle-check"></i>}
                        </button>
                        <button className={`btn text-start px-3 py-3 d-flex justify-content-between align-items-center ${program === 'grammar' ? 'border border-danger text-danger fw-bold' : 'bg-light border-0 text-dark'}`} style={{ borderRadius: '12px', transition: 'all 0.2s' }} onClick={() => setProgram('grammar')}>
                          <span>📚 Grammar Mastery Lab</span>
                          {program === 'grammar' && <i className="fa-solid fa-circle-check"></i>}
                        </button>
                        <button className={`btn text-start px-3 py-3 d-flex justify-content-between align-items-center ${program === 'ielts' ? 'border border-danger text-danger fw-bold' : 'bg-light border-0 text-dark'}`} style={{ borderRadius: '12px', transition: 'all 0.2s' }} onClick={() => setProgram('ielts')}>
                          <span>🎓 IELTS / PTE Prep Bootcamp</span>
                          {program === 'ielts' && <i className="fa-solid fa-circle-check"></i>}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="form-label fw-semibold text-secondary small text-uppercase mb-2">2. Select Batch System</label>
                      <div className="row g-2">
                        <div className="col-6">
                          <button className={`btn w-100 py-3 fw-semibold ${timing === 'weekday' ? 'btn-danger text-white' : 'btn-light'}`} style={{ borderRadius: '12px', backgroundColor: timing === 'weekday' ? '#dc3545' : '#f8f9fa' }} onClick={() => setTiming('weekday')}>
                            Original Weekdays<br/><span className="small opacity-75 fw-normal">Mon - Fri</span>
                          </button>
                        </div>
                        <div className="col-6">
                          <button className={`btn w-100 py-3 fw-semibold ${timing === 'weekend' ? 'btn-danger text-white' : 'btn-light'}`} style={{ borderRadius: '12px', backgroundColor: timing === 'weekend' ? '#dc3545' : '#f8f9fa' }} onClick={() => setTiming('weekend')}>
                            🏖️ Weekends<br/><span className="small opacity-75 fw-normal">Sat - Sun</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 ps-md-4 text-center text-md-start">
                    <span className="badge bg-light text-muted border px-2 py-1 mb-2 small" style={{ fontSize: '0.75rem' }}>Recommended Allocation Track</span>
                    <h3 className="fw-bold mb-1 text-dark">{activeBatch.name}</h3>
                    <p className="text-muted small mb-4"><i className="fa-regular fa-calendar me-1"></i> Allocation Duration: {activeBatch.duration}</p>
                    
                    <div className="p-4 bg-light mb-4 text-center text-md-start" style={{ borderRadius: "16px", borderLeft: "4px solid #dc3545" }}>
                      <div className="row align-items-center">
                        <div className="col-sm-6">
                          <span className="text-muted small d-block">Full Access Package Fee</span>
                          <h2 className="fw-extrabold m-0" style={{ color: "#dc3545", fontWeight: '800' }}>{activeBatch.price}</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end mt-2 mt-sm-0">
                          <span className="badge text-danger px-3 py-2 fw-bold" style={{ backgroundColor: '#dc354515', fontSize: '0.8rem', borderRadius: '8px' }}>
                            ⚠️ {activeBatch.seats}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-grid">
                      <Link to="/register" className="btn text-white text-center py-3 fs-6 fw-bold border-0" style={{ backgroundColor: "#dc3545", borderRadius: "12px" }}>
                        Secure My Demo Seat Instantly <i className="fa-solid fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACTIVE LIVE LEARNING BATCHES PROGRAM GRID */}
      <section className="py-5 my-3">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1">Find the perfect plan for you</h2>
            <p className="text-muted">Choose your goals and start practicing instantly</p>
            
            <div className="d-inline-flex bg-light p-2 mt-3" style={{ borderRadius: "50px", border: "1px solid #eee" }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className="btn px-4 py-2 text-capitalize border-0"
                  style={{
                    borderRadius: "40px",
                    backgroundColor: activeTab === cat ? "#dc3545" : "transparent",
                    color: activeTab === cat ? "#ffffff" : "#495057",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat === "all" ? "All Programs" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC COURSES DISPLAY GRID */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-danger" role="status"></div>
            </div>
          ) : (
            <div className="row g-4 justify-content-center">
              {filteredCourses.length === 0 ? (
                <p className="text-center text-muted">No batches active in this category right now.</p>
              ) : (
                filteredCourses.map((course) => (
                  <div className="col-lg-4 col-md-6" key={course.id}>
                    <div className="card h-100 border border-light p-3 shadow-sm transition-hover" style={{ borderRadius: "20px", backgroundColor: "#fff" }}>
                      <img 
                        src={course.image_url} 
                        className="w-100" 
                        alt={course.title} 
                        style={{ height: "180px", objectFit: "cover", borderRadius: "14px" }} 
                      />
                      <div className="card-body pt-3 px-1 d-flex flex-column">
                        <span className="text-danger small fw-semibold mb-1 text-uppercase" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
                          {course.category?.name || "English"}
                        </span>
                        <h5 className="fw-bold mb-2 text-dark">{course.title}</h5>
                        <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                          <span><i className="fa-regular fa-clock me-1"></i> {course.duration}</span>
                          <span>•</span>
                          <span><i className="fa-regular fa-user me-1"></i> {course.instructor_name}</span>
                        </div>
                        <p className="text-muted small flex-grow-1 mb-3 text-truncate-2">{course.description}</p>
                        
                        <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top border-light">
                          <div>
                            <span className="text-muted small d-block" style={{ fontSize: "0.75rem" }}>Total Price</span>
                            <strong className="fs-4 fw-bold" style={{ color: "#dc3545" }}>₹{parseFloat(course.price).toFixed(0)}</strong>
                          </div>
                          <Link to={`/courses/${course.id}`} className="btn text-white btn-sm px-4 py-2" style={{ backgroundColor: "#dc3545", borderRadius: "8px", fontWeight: "600" }}>
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          <div className="text-center mt-5">
            <Link to="/courses" className="text-decoration-none fw-bold" style={{ color: "#dc3545" }}>
              See all learning programs <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VIDEO PREVIEW SECTION */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1">Inside WellTalk Transformation Stages</h2>
            <p className="text-muted">Take a look at our live interactive podium sessions and public speaking assignments</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm overflow-hidden transition-hover" style={{ borderRadius: "16px" }}>
                <div className="position-relative">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400" className="w-100" alt="Video Thumbnail" style={{ height: "220px", objectFit: "cover" }} />
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: "60px", height: "60px", color: "#dc3545" }}>
                    <i className="fa-solid fa-play fs-4 ms-1"></i>
                  </a>
                </div>
                <div className="card-body p-3 bg-white border border-top-0 border-light" style={{ borderRadius: "0 0 16px 16px" }}>
                  <h6 className="fw-bold mb-1 text-dark">How to Eradicate Stage Fear</h6>
                  <span className="text-muted small">⏱️ 15th Championship Clip</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm overflow-hidden transition-hover" style={{ borderRadius: "16px" }}>
                <div className="position-relative">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400" className="w-100" alt="Video Thumbnail" style={{ height: "220px", objectFit: "cover" }} />
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: "60px", height: "60px", color: "#dc3545" }}>
                    <i className="fa-solid fa-play fs-4 ms-1"></i>
                  </a>
                </div>
                <div className="card-body p-3 bg-white border border-top-0 border-light" style={{ borderRadius: "0 0 16px 16px" }}>
                  <h6 className="fw-bold mb-1 text-dark">Public Speaking Mastery Rules</h6>
                  <span className="text-muted small">⏱️ Classroom Training Session</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm overflow-hidden transition-hover" style={{ borderRadius: "16px" }}>
                <div className="position-relative">
                  <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400" className="w-100" alt="Video Thumbnail" style={{ height: "220px", objectFit: "cover" }} />
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: "60px", height: "60px", color: "#dc3545" }}>
                    <i className="fa-solid fa-play fs-4 ms-1"></i>
                  </a>
                </div>
                <div className="card-body p-3 bg-white border border-top-0 border-light" style={{ borderRadius: "0 0 16px 16px" }}>
                  <h6 className="fw-bold mb-1 text-dark">Student Performance & Feedback</h6>
                  <span className="text-muted small">⏱️ Actual Stage Deliverable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UPCOMING EVENTS */}
      <section className="py-5" style={{ backgroundColor: "#dc354503", borderTop: "1px solid #dc354510", borderBottom: "1px solid #dc354510" }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1">Upcoming Events & Bootcamps</h2>
            <p className="text-muted">Don't just learn inside classrooms. Join our offline meets & public presentation tours!</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm bg-white overflow-hidden h-100 transition-hover" style={{ borderRadius: "20px" }}>
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=400" className="h-100 w-100" alt="Trip" style={{ objectFit: "cover", minHeight: "200px" }} />
                  </div>
                  <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                    <div>
                      <span className="badge text-danger mb-2 px-2 py-1" style={{ borderRadius: "6px", backgroundColor: "#dc354515" }}> Campfire Night</span>
                      <h5 className="fw-bold text-dark">Weekend English BootCamp Trip</h5>
                      <p className="text-muted small">A 2-day nature trip where speaking native language is restricted! Practice communication naturally with fun outdoor games.</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-light">
                      <span className="text-muted small"><i className="fa-regular fa-calendar-days me-1"></i> July 15, 2026</span>
                      <Link to="/events" className="btn text-white btn-sm px-3 fw-semibold" style={{ backgroundColor: "#dc3545", borderRadius: "6px" }}>Join Trip</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm bg-white overflow-hidden h-100 transition-hover" style={{ borderRadius: "20px" }}>
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400" className="h-100 w-100" alt="Seminar" style={{ objectFit: "cover", minHeight: "200px" }} />
                  </div>
                  <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
                    <div>
                      <span className="badge text-danger mb-2 px-2 py-1" style={{ borderRadius: "6px", backgroundColor: "#dc354515" }}> Public Speaking</span>
                      <h5 className="fw-bold text-dark">Stage Fear & Confidence Meet</h5>
                      <p className="text-muted small">Meet your instructors and fellow learners offline in Delhi. Get an exclusive chance to speak on a real stage setup.</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-light">
                      <span className="text-muted small"><i className="fa-regular fa-calendar-days me-1"></i> August 02, 2026</span>
                      <Link to="/events" className="btn text-white btn-sm px-3 fw-semibold" style={{ backgroundColor: "#dc3545", borderRadius: "6px" }}>Book Ticket</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXPERT MENTORS SYSTEM */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1">Start commanding audiences in 3 steps</h2>
            <p className="text-muted">WellTalk matches and builds perfectly around your corporate scheduling boundaries.</p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="bg-light p-4 h-100 border border-light" style={{ borderRadius: "16px" }}>
                <div className="fs-1 mb-3"><i className="fa-solid fa-user-plus" style={{ color: "#dc3545" }}></i></div>
                <h5 className="fw-bold">1. Build Profile</h5>
                <p className="text-muted small mb-0">Create your dynamic profile map and list current communication bottlenecks.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light p-4 h-100 border border-light" style={{ borderRadius: "16px" }}>
                <div className="fs-1 mb-3"><i className="fa-solid fa-book-open" style={{ color: "#dc3545" }}></i></div>
                <h5 className="fw-bold">2. Select Track & Timing</h5>
                <p className="text-muted small mb-0">Use the interactive batch locator to allocate weekend or fast-track weekday rooms.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light p-4 h-100 border border-light" style={{ borderRadius: "16px" }}>
                <div className="fs-1 mb-3"><i className="fa-solid fa-video" style={{ color: "#dc3545" }}></i></div>
                <h5 className="fw-bold">3. Access Stage Space</h5>
                <p className="text-muted small mb-0">Step directly onto active training stages or structured speech rooms daily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE US */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2 className="fw-bold display-6 mb-4" style={{ fontWeight: "800" }}>Everything you need to talk flawlessly & naturally</h2>
              <div className="d-flex gap-3 mb-4">
                <div className="text-danger fs-4"><i className="fa-solid fa-circle-check"></i></div>
                <div>
                  <h6 className="fw-bold mb-1">80% Practical - Daily Stage Drills</h6>
                  <p className="text-muted small mb-0">We omit dry memorization. Every singular curriculum layout pushes you onto real podium infrastructure setups.</p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-4">
                <div className="text-danger fs-4"><i className="fa-solid fa-circle-check"></i></div>
                <div>
                  <h6 className="fw-bold mb-1">Anytime Learning Resources</h6>
                  <p className="text-muted small mb-0">Access your documented evaluation maps, video captures, and worksheets on our centralized framework portal.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="row g-4 text-center">
                <div className="col-6">
                  <div className="p-4 bg-light border border-light" style={{ borderRadius: "12px" }}>
                    <h2 className="fw-bold mb-1" style={{ color: "#dc3545" }}>25K+</h2>
                    <span className="text-muted small">Alumni Base</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-4 bg-light border border-light" style={{ borderRadius: "12px" }}>
                    <h2 className="fw-bold mb-1" style={{ color: "#dc3545" }}>95%</h2>
                    <span className="text-muted small">Success Conversion</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-4 bg-light border border-light" style={{ borderRadius: "12px" }}>
                    <h2 className="fw-bold mb-1" style={{ color: "#dc3545" }}>200+</h2>
                    <span className="text-muted small">Corporate Mentors</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-4 bg-light border border-light" style={{ borderRadius: "12px" }}>
                    <h2 className="fw-bold mb-1" style={{ color: "#dc3545" }}>4.9★</h2>
                    <span className="text-muted small">Platform Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION (CTA) BANNER */}
      <section className="container my-5 text-white py-5 px-4 position-relative text-center" 
               style={{ backgroundColor: "#dc3545", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(220, 53, 69, 0.2)" }}>
        <div className="position-relative" style={{ zIndex: "2" }}>
          <h2 className="fw-bold mb-2 display-6">Ready to break your silence and speak naturally?</h2>
          <p className="opacity-90 mb-4 mx-auto" style={{ maxWidth: "500px" }}>Join thousands of working professionals executing fluent speeches today.</p>
          <Link to="/register" className="btn btn-light btn-lg px-5 py-3 fw-bold text-danger shadow-sm" style={{ borderRadius: "12px", fontSize: "0.95rem" }}>
            Start Your Free Evaluation Now
          </Link>
        </div>
        <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: "200px", height: "200px", top: "-50px", right: "-50px" }}></div>
        <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: "150px", height: "150px", bottom: "-50px", left: "-50px" }}></div>
      </section>

      {/* GLOBAL SCALED INTERACTION HANDLERS */}
      <style>{`
        .transition-hover { transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease; }
        .transition-hover:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(220,53,69,0.06) !important; }
        
        .wt-review-card {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wt-review-card:hover {
          background-color: #ffffff !important;
          border-color: #ffffff !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.04) !important;
          transform: translateY(-2px);
        }

        .animate-pulse { animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.6; }
          100% { transform: scale(0.9); opacity: 1; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }

        .text-truncate-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
        .wt-premium-btn-danger, .wt-premium-btn-outline {
          transition: transform 0.2s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.2s ease;
        }
        .wt-premium-btn-danger:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(220, 53, 69, 0.3) !important;
        }
        .wt-premium-btn-outline:hover {
          transform: translateY(-2px);
          background-color: #f8f9fa !important;
          border-color: #a0a5b5 !important;
        }
      `}</style>
    </div>
  );
}

export default memo(Home);