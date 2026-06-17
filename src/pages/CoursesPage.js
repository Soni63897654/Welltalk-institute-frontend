import React, { useState, useEffect } from 'react';
import { getCoursesAPI } from '../services/api'; // ✅ API path updated
import CourseCard from '../components/CourseCard/CourseCard';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCoursesAPI();
        if (res && res.status) {
          setCourses(res.data);
        } else if (Array.isArray(res)) {
          setCourses(res);
        }
      } catch (err) {
        console.error("Error loading courses:", err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5 py-5" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted fw-medium">Loading Batches...</p>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark display-6" style={{ fontWeight: '800' }}>Our English Speaking Batches</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '500px' }}>
          Choose your level and start practicing interactive live spoken English right away.
        </p>
      </div>

      {error && <div className="alert alert-danger text-center shadow-sm" style={{ borderRadius: '10px' }}>{error}</div>}

      {!loading && courses.length === 0 && (
        <div className="text-center my-5 py-5">
          <i className="fa-regular fa-folder-open text-muted fs-1 mb-3"></i>
          <h4 className="text-secondary fw-normal">No active batches available right now.</h4>
        </div>
      )}

      <div className="row g-4 justify-content-center">
        {courses.map((course) => (
          <div className="col-12 col-md-6 col-lg-4" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;