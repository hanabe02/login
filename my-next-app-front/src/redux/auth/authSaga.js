import { takeLatest, put, call } from 'redux-saga/effects';
import {LOGIN_REQUEST, loginSuccess, loginFailure} from "./authActions";
import axios from 'axios';
// import loginService from './authApi';

// const GET_API_URL = '/api/login/';

const loginApi = async (username, password) => {
    console.log(username);
    console.log(password);
    const params = {
        username: username,
        password: password
    }
    try{
        // const response = await loginService.post("/api/login", {
        //     params: {username, password}
        // });
        const response = await axios.post('http://localhost:8888/api/login', params);
        console.log(response);
        return response.data;
        // return response.data.gridRowJson;
    }catch(error){
        console.error("Login API error:", error);
        throw error;
    }
}
// function loginApi(username, password){
//     return fetch("")
// }

function* handleLogin(action){
    try{
        console.log("saga 실행됨", action.payload);

        const response = yield call(loginApi, action.payload.username, action.payload.password);
        console.log(response);
        // console.log(response.serviceToken);

        if (!response) {
            throw new Error("❌ loginApi 응답이 undefined임");
        }

        if (response.serviceToken) {
            console.log("🎉 LOGIN_SUCCESS 디스패치 실행됨");
            yield put(loginSuccess(response)); 
        } else {
            console.log("❌ LOGIN_FAILURE 디스패치 실행됨");
            yield put(loginFailure("Invalid token"));
        }
    }catch(error){
        yield put(loginFailure(error.message));
    }
}

export default function* authSaga(){
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}