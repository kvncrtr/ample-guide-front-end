import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import reducer from "./post";

const logger = createLogger({
   collapsed: true,
   diff: true
});

const componsedEnhancers = compose(
   applyMiddleware(thunk, logger), 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, componsedEnhancers);
   
export default store;