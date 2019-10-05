import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { calculatorReducer } from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(calculatorReducer, enhancer);

export default store;
