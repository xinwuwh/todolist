import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes';
import { initlistAction } from './actionCreators';
import axios from 'axios';

function* getInitList(){
    const res= yield axios.get('/todolist.json');
    const action=initlistAction(res.data);
    yield put(action);
}

//generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;
