import { applyMiddleware, combineReducers, createStore } from "redux";
import { cardReducer } from "../redux/Reducers/cardReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cards: cardReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
