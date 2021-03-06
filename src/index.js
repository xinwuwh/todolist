import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import { Provider } from 'react-redux';
import store from './store';

const App =(
    <Provider store={store}>
        <Todolist />
    </Provider>
);

//JSX 语法中，使用自己创建的组建，名称开头要大写，大写一般是组件

//把app挂载到id为root的DOM结点下
ReactDOM.render(App, document.getElementById('root'));


