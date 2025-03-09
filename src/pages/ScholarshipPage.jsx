import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScholarshipDetailPage = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, black, gray)', color: 'white', minHeight: '100vh' }}>
      {/* Header Section */}
      <header className="p-3 text-white" style={{ background: 'black' }}>
        <div className="container d-flex justify-content-between align-items-center">
          <h3>Online Education</h3>
          <div>
            <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </header>

      {/* Scholarship Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Scholarships</h2>
        <div className="row g-4">
          {[
            { title: "E-Learning Fellowship", amount: "$30.00", awards: "80", deadline: "July 02, 2020" },
            { title: "Distance Learning Scholarship", amount: "$30.00", awards: "80", deadline: "July 05, 2020" },
            { title: "United E-Learning Fellowship", amount: "$30.00", awards: "80", deadline: "July 08, 2020" },
            { title: "Youngblood Scholarship", amount: "$30.00", awards: "80", deadline: "July 10, 2020" }
          ].map((scholarship, index) => (
            <div key={index} className="col-md-6">
              <div className="p-4 rounded" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)' }}>
                <h3>{scholarship.title}</h3>
                <p>Total: {scholarship.amount}</p>
                <p>Awards: {scholarship.awards}</p>
                <p>Deadline: {scholarship.deadline}</p>
                <a href="#" className="btn btn-light">View Scholarship</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center p-3 mt-5" style={{ background: 'black', color: 'white' }}>
        <p>&copy; 2025 E-Learning | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ScholarshipDetailPage;
