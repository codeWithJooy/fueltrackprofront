import { combineReducers } from "redux";

import toastReducer from "./toastReducer";
import userReducer from "./userReducers";
const rootReducer = combineReducers({
  toast: toastReducer,
  user:userReducer,
});
export default rootReducer;