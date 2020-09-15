import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';

ReactDOM.render(
  //<React.StrictMode>
    <TodoList />
  //</React.StrictMode>
  ,
  document.getElementById('root')
  // 将APP组件挂载到public目录下的index.html的root
);


