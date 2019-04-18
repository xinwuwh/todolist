import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';

//JSX 语法中，使用自己创建的组建，名称开头要大写，大写一般是组件

//把app挂载到id为root的DOM结点下
ReactDOM.render(<Todolist />, document.getElementById('root'));


