import React, {Component } from 'react';
import store from './store';
import {connect} from 'react-redux';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        //this.handleInputChange= this.handleInputChange.bind(this)
        //this.handleClick=this.handleClick.bind(this)
    }


    render(){
        return(
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button >submit</button>
                </div>
                <ul>
                    <li>dell</li>
                </ul>
            </div>
        )

    }

}

const mapStateToProps=(state) =>{
    return {
        inputValue: state.inputValue

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
        }
        

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);