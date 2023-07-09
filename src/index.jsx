import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "./features/common/loading";
import Loadable from "react-loadable";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";
import { injectStore } from "./apis/index";

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
            <GoogleOAuthProvider clientId="362955312743-2igqvv7odpc8snj388fmo95k00o7ffvl.apps.googleusercontent.com">
              <BrowserRouter>
                <Main />
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
