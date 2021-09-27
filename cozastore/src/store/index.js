import { applyMiddleware, compose, createStore } from "redux";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import thunk from "redux-thunk";
import { getallProducts } from "../actions/products";
import { reducers } from "./../reducers/index";
import { getallArticls } from "./../actions/articls";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = reducers;
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["order","favorite", "cart", "icon"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const reduxDevtool =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, loadingBarMiddleware()))
);

// initialize
store.dispatch(getallProducts());
store.dispatch(getallArticls());

// subscribe
// store.subscribe(()=>console.log(store.getState()))

export const persistedStore = persistStore(store);
