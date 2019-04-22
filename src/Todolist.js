import React from 'react';
//import store from './store';
import {connect} from 'react-redux';

const Todolist = (props)=>{
    const {inputValue,changeInputValue,handleClick,list,handleDelete}= props;

        return(
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={handleClick}>submit</button>
                </div>
                <ul>
                    {list.map((item,index)=>{
                        return <li onClick={handleDelete} key={index}>{item}</li>
                    })
                }
                </ul>
            </div>
        )
    
}



const mapStateToProps=(state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list

    }
}

//store.dispatch 映射到 props
const mapDispatchToProps=(dispatch) =>{
    return {
        changeInputValue(e){
            const action={
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick(){
            const action={
                type: 'add_item'
            }
            dispatch(action);
        },

        handleDelete(index){
            const action={
                type: 'handle_delete',
                value: index
            }
            dispatch(action);

        }
        

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);