import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Careers from "../pages/Careers";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import CreateJob from "../pages/CreateJob"
import Applications from "../pages/Applications";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career/:id" element={<JobDetails/>} />
        <Route path="/admin/jobs" element={<Jobs />} />
        <Route path="/admin/jobs/create" element={<CreateJob />} />
        <Route path="/admin/applications" element={<Applications/>} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;