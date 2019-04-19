import React, { Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {content,test }= this.props ;
        return (
        <div onClick={this.handleClick}>
        {test}-{content}
        </div>
        )
    }

    handleClick(){
        const { deleteItem, index }=this.props
        deleteItem(index);

       //子组件通过this.props.属性 来接受父组件传递的东西
    }


}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;