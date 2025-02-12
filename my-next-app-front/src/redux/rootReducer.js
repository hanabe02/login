import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

// ✅ 모든 reducer 합침
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
