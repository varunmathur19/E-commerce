import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";
import amountReducer from "./reducer/amountReducer";
import { thunk } from "redux-thunk";
export const store = createStore(reducers, {}, applyMiddleware(thunknpm));
