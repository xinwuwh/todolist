import React, { Component, Fragment } from 'react';
import TodoItem from './Todoitem'
import axios from 'axios'
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
/*
    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
        console.log('componentWillMount');
    }
*/
    render(){
        //console.log('render')
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">Input Content</label>
                
                    <input 
                    id="insertArea"
                    className='input'
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}//监听事件改变
                    ref={(input) => {this.input=input}}
                    />
                    <button onClick={this.handleBtnClick}>Submit</button></div>
                <ul ref={(ul)=> {this.ul=ul}}> 
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }


    //组件被挂载之后自动执行（页面发ajax请求数据，数据拿到后，被挂载在页面上）
    componentDidMount(){
        axios.get('/api/todolist')
        .then ((res)=>{
            this.setState(() => ({
                list: [...res.data]
            }));
        })
        .catch(()=>{alert('error')})
    }
/*
    //组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    //组建被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行，是否执行取决于返回结果
    componentWillUpdate(){
        console.log('ComponentWillUpdate');
    
    }

    //组件更新完成之后会被执行
    componentDidUpdate(){
        console.log('ComponentDidUpdate');
    
    }
*/

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
        }),() =>{
            console.log(this.ul.querySelectorAll('div').length);  
        });  
          
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