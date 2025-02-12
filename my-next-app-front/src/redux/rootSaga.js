import { all } from "redux-saga/effects";
import authSaga from "./auth/authSaga";

// ✅ 모든 saga 합침
export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}