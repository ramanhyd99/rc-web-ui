import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "./apis/index";
import Loading from "./features/common/loading";
import "./index.css";
import { persistor, store } from "./redux/store";
import CONFIG from "./config";

injectStore(store); // needed to inject Redux store into axios calls

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = Loadable({
  loading: Loading,
  loader: () => import("./features/main"),
});

async function bootStrap(preloadedState = {}) {
  const App = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <CookiesProvider>
            <GoogleOAuthProvider clientId={CONFIG.GOOGLE_CLIENT_ID}>
              <BrowserRouter>
                <ThemeProvider>
                  <Main />
                </ThemeProvider>
              </BrowserRouter>
            </GoogleOAuthProvider>
          </CookiesProvider>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
  root.render(App);
}

bootStrap();
