import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "./features/common/loading";
import Loadable from "react-loadable";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = Loadable({
  loading: Loading,
  loader: () => import("./features/main"),
});

async function bootStrap(preloadedState = {}) {
  const App = (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
  root.render(App);
}

bootStrap();
