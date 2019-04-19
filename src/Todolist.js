import React, { Component, Fragment } from 'react';
import TodoItem from './Todoitem'
import Test from './Test';
import './style.css'

class Todolist extends Component{
    constructor(props){
        super(props);
        //this.state组件状态
        this.state = {
            inputValue:'',
            list:['Study English','Study React'] //列表中的项
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">Input Content</label>
                
                    <input 
                    id="insertArea"
                    className='input'
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}//监听事件改变
                    
                    />
                    <button onClick={this.handleBtnClick}>Submit</button></div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return (
            <div key={index}>
                <TodoItem 
                
                content={item} 
                index={index}
                deleteItem={this.handleItemDelete}
                />
            {/*父组件通过属性的形式向子组件传递数据，方法。方法需要bind(this)进行绑定 */}
            </div>
            )
        })

    }

    handleInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
            }));
    }

    handleBtnClick(){
        this.setState((prevState) =>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));       
    }

    handleItemDelete(index){
        this.setState((prevState) => {
            const list= [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }

}

//导出后才能使用组件
export default Todolist;