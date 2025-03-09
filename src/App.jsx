import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import CourseSingle from "./components/CourseSingle";
import EventSingle from "./pages/EventSingle";
import WhyChooseUs from "./pages/WhyChooseUs";
import Faq from "./pages/Faq";
import Events from "./pages/Events";
import PopularCourses from "./pages/PopularCourses";
import LoginPage from "./components/Login";
import RegisterPage from "./pages/RegisterPage";
import ElearningPage from "./pages/ElearningPage";
import ScholarshipDetailPage from "./pages/ScholarshipDetailPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import TeachersPage from "./pages/TeachersPage";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      {user && <Header />} {/* Show Header only if logged in */}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute><Home Courses={<CourseSingle />} /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
        <Route path="/blogsingle" element={<PrivateRoute><BlogSingle /></PrivateRoute>} />
        <Route path="/course" element={<PrivateRoute><CourseSingle /></PrivateRoute>} />
        <Route path="/popularcourses" element={<PrivateRoute><PopularCourses /></PrivateRoute>} />
        <Route path="/whychooseus" element={<PrivateRoute><WhyChooseUs /></PrivateRoute>} />
        <Route path="/faq" element={<PrivateRoute><Faq /></PrivateRoute>} />
        <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
        <Route path="/eventsingle" element={<PrivateRoute><EventSingle /></PrivateRoute>} />
        <Route path="/elearning" element={<PrivateRoute><ElearningPage /></PrivateRoute>} />
        <Route path="/scholarship" element={<PrivateRoute><ScholarshipPage /></PrivateRoute>} />
        <Route path="/scholarship-detail" element={<PrivateRoute><ScholarshipDetailPage /></PrivateRoute>} />
        <Route path="/teacher-profile" element={<PrivateRoute><TeacherProfilePage /></PrivateRoute>} />
        <Route path="/teachers" element={<PrivateRoute><TeachersPage /></PrivateRoute>} />
      </Routes>
      {user && <Footer />} {/* Show Footer only if logged in */}
    </Router>
  );
}

export default App;
