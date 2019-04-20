import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';


class Todolist extends Component {

    constructor(props){
        super(props);
        this.state= store.getState();
        //console.log(this.state());
    }

    render(){
        return (
            <div style={{marginTop: '10px', marginLeft:'10px'}}>
                <div> 
                    <Input value={this.state.value} placeholder='todo info' style={{width: '300px', marginRight:'10px'}}/>
                    <Button type="primary">Submit</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        

        )
    }
}
export default Todolist;