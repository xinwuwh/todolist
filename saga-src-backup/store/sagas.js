import { put, takeEvery } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes';
import { initlistAction } from './actionCreators';
import axios from 'axios';

function* getInitList(){
    try{
        const res= yield axios.get('/todolist.json');
        const action=initlistAction(res.data);
        yield put(action);
    }catch(e){
        console.log('list.json faild')
    }
    
}

//generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;
