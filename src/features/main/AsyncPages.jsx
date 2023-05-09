import Loadable from "react-loadable";
import Loading from "../common/loading";

export const HomePage = Loadable({
  loading: Loading,
  loader: () => import("../home"),
});
