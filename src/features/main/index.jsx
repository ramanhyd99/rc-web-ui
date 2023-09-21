import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CookieModal from "../common/modals/CookieModal";
import NoInternetComp from "../common/NoInternetComp";
import ErrorNotification from "../errors/ErrorNotification";
import Footer from "../footer";
import NavBar from "../navbar";
import ClientPage from "../pages/my-clients/client-page";
import SpeedDialComp from "../pages/home/components/SpeedDial";
import {
  AboutPage,
  BookingPage,
  ContactUsPage,
  DashboardPage,
  FAQsPage,
  FeedbackPage,
  GalleryPage,
  HomePage,
  LibraryPage,
  LoginPage,
  MyAssignmentsPage,
  MyClientsPage,
  MySchedulePage,
  MySessionsPage,
  OurTeamPage,
  PageNotFound,
  PaymentsPage,
  PrivacyPolicyPage,
  SetSchedulePage,
  SettingsPage,
  TermsAndConditionsPage,
} from "./AsyncPages";

const Main = () => {
  const location = useLocation();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top whenever the route changes
  }, [location]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <div className="z-9999 fixed bottom-2 left-2">
        <SpeedDialComp />
      </div>
      {/* <div className="z-9999 fixed right-2 bottom-2  w-3/4 flex justify-start">
        <Banner />
      </div> */}
      <div className="block">
        <div>
          <NavBar />
          <ErrorNotification />
        </div>
        <div className="flex-grow min-h-screen pt-20 pb-6">
          {isOnline ? (
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
              <Route path="/my-schedule" element={<MySchedulePage />} />
              <Route path="/client" element={<ClientPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
              <Route path="/not-found" element={<PageNotFound />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditionsPage />}
              />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          ) : (
            <div>
              <NoInternetComp />
            </div>
          )}
        </div>
        <div>
          <CookieModal />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
