import Loadable from "react-loadable";
import Loading from "../common/loading";

export const HomePage = Loadable({
  loading: Loading,
  loader: () => import("../pages/home"),
});

export const PageNotFound = Loadable({
  loading: Loading,
  loader: () => import("../pages/not-found"),
});

export const AboutPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/about"),
});

export const FAQsPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/faqs"),
});

export const LoginPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/login"),
});

export const OurTeamPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/team"),
});

export const BookingPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/booking"),
});

export const MySessionsPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/my-sessions"),
});

export const ContactUsPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/contact-us"),
});

export const MyClientsPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/my-clients"),
});

export const MyAssignmentsPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/my-assignments"),
});

export const SetSchedulePage = Loadable({
  loading: Loading,
  loader: () => import("../pages/set-schedule"),
});

export const SettingsPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/settings"),
});

export const PaymentPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/payment"),
});

export const LibraryPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/library"),
});

export const PrivacyPolicyPage = Loadable({
  loading: Loading,
  loader: () => import("../pages/privacy-policy"),
});