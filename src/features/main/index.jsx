import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../footer";
import NavBar from "../navbar";
import { AboutPage, FAQsPage, HomePage, PageNotFound } from "./AsyncPages";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top whenever the route changes
  }, [location]);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <NavBar />
        </div>
        <div className="flex-grow pt-20 min-h-screen">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/your-psychologist" element={<AboutPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/not-found" element={<PageNotFound />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
