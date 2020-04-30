import { all, fork } from "redux-saga/effects";
import axios from "axios";
import user from "./user";

axios.defaults.baseURL = "http://localhost:5000/api";

export default function* rootsaga() {
  yield all([fork(user)]);
}
