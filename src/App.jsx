import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Divisionsection from './Pages/Divisionsection';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Division/Header';
import Signup from "./Components/Signup/signup";
import Blog from './Pages/Blog';
import BlogPostPage from './Pages/Blogpage';
import Servicesection from './Pages/Servicesection';
import Quick from './Pages/Quick';
import Contact from './Components/Contact/Contact'
import Aboutsection from './Pages/Aboutsection';
import Franchisesection from './Pages/Franchisesection';
import Goldlease from './Pages/Goldlease';

const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/signup"; // Logic to hide footer

  return (
    <>
    {!hideFooter && <Header />}
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
        <Route path="/goldlease" element={<Goldlease />} />

        

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
