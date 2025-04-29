import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Divisionsection from './Pages/Divisionsection';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Faq from './Components/Quick links/Faq';
import Signup from "./Components/Signup/signup";
import Blog from './Pages/Blog';
import BlogPostPage from './Pages/Blogpage';
import Servicesection from './Pages/Servicesection';
import Quick from './Pages/Quick';
import Contact from './Components/Contact/Contact'
import Aboutsection from './Pages/Aboutsection';
import Franchisesection from './Pages/Franchisesection';

const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/signup"; // Logic to hide footer

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divisions" element={<Divisionsection />} />
        <Route path="/faq" element={<Quick />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpage" element={<BlogPostPage />} />
        <Route path="/services" element={<Servicesection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutsection />} />
        <Route path="/franchise" element={<Franchisesection />} />
      </Routes>
      {!hideFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
