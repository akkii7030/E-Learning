import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import CourseSingle from './components/CourseSingle';
import EventSingle from './pages/EventSingle';
import WhyChooseUs from './pages/WhyChooseUs';
import Faq from './pages/Faq';
import Events from './pages/Events';
import PopularCourses from './pages/PopularCourses';
import Login from './components/Login';
import ElearningPage from './pages/elearningPage';
import RegisterPage from './pages/RegisterPage';
import ScholarshipDetailPage from './pages/ScholarshipPage';
import ScholarshipPage from './pages/ScholarshipDetailPage';
import TeacherProfilePage from './pages/TeacherProfilePage';
import TeachersPage from './pages/TeachersPage';
import Footer  from "./components/Footer"
import Sidebar from './components/Home';
function App() {
  return (
    <Router>
      {/* Header is displayed on all pages */}
      <Header />
{/* <Sidebar/> */}
      {/* Routes for different pages */}
      <Routes>
      <Route path="/" element={<Home Courses={<CourseSingle />} />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogsingle" element={<BlogSingle />} />
        <Route path="/course" element={<CourseSingle />} />
        <Route path="/popularcourses" element={<PopularCourses />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventsingle" element={<EventSingle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/elearning" element={<ElearningPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/scholarship" element={<ScholarshipPage />} />
        <Route path="/scholarship-detail" element={<ScholarshipDetailPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/elearning" element={<ElearningPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;