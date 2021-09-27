import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import { store ,persistedStore} from "./store";
import { PersistGate } from "redux-persist/es/integration/react";

// import configureStore from "./store/configureStore";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate
    loading={null}
      persistor={persistedStore}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
