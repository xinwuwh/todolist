import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initlistAction} from './store/actionCreators';
import TodolistUI from './TodolistUI';
import axios from 'axios';

class Todolist extends Component {

    constructor(props){
        super(props);
        this.state= store.getState();
        this.handleInputChange= this.handleInputChange.bind(this);
        this.handleStoreChange= this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
        //console.log(this.state());
    }

    render(){
        return (
            <TodolistUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount(){
        axios.get('/todolist.json').then((res)=>{
            const data= res.data;
            const action=initlistAction(data);
            store.dispatch(action);

        })
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }


}
export default Todolist;