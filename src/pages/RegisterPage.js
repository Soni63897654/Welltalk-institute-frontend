import React from 'react';
import Register from '../components/auth/Register'; // Importing the isolated form component

function RegisterPage() {
  return (
    // This wrapper container centers the layout box horizontally and vertically on screen
    <div className="auth-container d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            {/* Renders the child Register Form component within responsive grid columns */}
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;