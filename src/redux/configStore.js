import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyCongViecReducer } from "./reducers/QuanLyCongViecReducer";


const rootReducer = combineReducers({
    // state ứng dụng
    QuanLyNguoiDungReducer,
    QuanLyCongViecReducer,
  });
  

// Cấu hình thunk
const middleware = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));