import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import profileReducer from "./profile/profileReducer";

// ✅ 모든 reducer 합침
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});


export default rootReducer;
