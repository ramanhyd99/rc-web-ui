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