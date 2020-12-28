import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import fileColumnsReducer from "./fileColumnsReducer";
import chatBotReducer from "./chatBotReducer";

let reducers = combineReducers({
  fileColumns: fileColumnsReducer,
  chatBot: chatBotReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
