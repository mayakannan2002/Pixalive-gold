import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Division/Header';

// Lazy load pages/components for code splitting
const Home = lazy(() => import('./Pages/Home'));
const Divisionsection = lazy(() => import('./Pages/Divisionsection'));
const Quick = lazy(() => import('./Pages/Quick'));
const Signup = lazy(() => import('./Components/Signup/signup'));
const Blog = lazy(() => import('./Pages/Blog'));
const BlogPostPage = lazy(() => import('./Pages/Blogpage'));
const Servicesection = lazy(() => import('./Pages/Servicesection'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Aboutsection = lazy(() => import('./Pages/Aboutsection'));
const Franchisesection = lazy(() => import('./Pages/Franchisesection'));
const Goldlease = lazy(() => import('./Pages/Goldlease'));

const DivisionPage = lazy(() => import('./Components/Division/Divisionpage'));


// AppContent handles routing and layout logic
const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/signup"; // Example: hide footer on signup page

  return (
    <>
      {!hideFooter && <Header />}

      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
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
          <Route path="/divisionpage" element={<DivisionPage />} />

        </Routes>
      </Suspense>

      {!hideFooter && <Footer />}
    </>
  );
};

// Main App component with router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
