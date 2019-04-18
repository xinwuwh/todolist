import React, { Component} from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {content }= this.props ;
        return (
        <div onClick={this.handleClick}>
        {content}
        </div>)
    }

    handleClick(){
        const { deleteItem, index }=this.props
        deleteItem(index);

       //子组件通过this.props.属性 来接受父组件传递的东西
    }


}
export default TodoItem;