import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CookieModal from "../common/modals/CookieModal";
import ErrorNotification from "../errors/ErrorNotification";
import Footer from "../footer";
import NavBar from "../navbar";
import {
  AboutPage,
  BookingPage, ContactUsPage,
  FAQsPage,
  HomePage,
  LibraryPage,
  LoginPage, MyAssignmentsPage,
  MyClientsPage,
  MySessionsPage,
  OurTeamPage,
  PageNotFound,
  PaymentPage,
  PrivacyPolicyPage,
  SetSchedulePage,
  SettingsPage
} from "./AsyncPages";

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
          <ErrorNotification/>
        </div>
        <div className="flex-grow pt-20 min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/your-psychologist" element={<AboutPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/set-schedule" element={<SetSchedulePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/my-sessions" element={<MySessionsPage />} />
            <Route path="/my-assignments" element={<MyAssignmentsPage />} />
            <Route path="/my-clients" element={<MyClientsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/not-found" element={<PageNotFound />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </div>
        <div>
          <CookieModal/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
