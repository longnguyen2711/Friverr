import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
    // state ứng dụng

  });
  

// Cấu hình thunk
const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));