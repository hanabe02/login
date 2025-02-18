import { all } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import profileSaga from "./profile/profileSaga";

// ✅ 모든 saga 합침
export default function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
  ]);
}