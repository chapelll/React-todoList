import React, { Component } from 'react';
import './TodoList.css';
import { Button } from 'antd';
import { Layout } from 'antd';


class TodoList extends Component {

  constructor(props) {
    // constructor会最先被执行
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // 组件第一次渲染
  componentDidMount () {
    // 取出
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    if (!todoList) {
      // 设置一些默认值
      todoList = ['学英语', '听音乐', '玩游戏']
    }
    if (todoList) {
      this.setState({
        list: todoList
      })
    }
    // 存储
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  render() {
    return (
      <Layout>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <Button type="primary"
            onClick={this.handleBtnClick.bind(this)}
          >提交
          </Button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li
                key={index} >{item}
                <div>
                  <button onClick={this.handleItemUpdate.bind(this, index)}>修改</button>
                  <button onClick={this.handleItemDelete.bind(this, index)}>删除</button>
                </div>
              </li>
            })
          }
        </ul>
      </Layout>
    )
  }


  // 定义取出数据函数，每次执行操作前进行提取
  get() {
    //return JSON.parse(localStorage.getItem("todoList"));
  }

  // 定义储存数据函数，每次执行操作后进行存储
  set(newList) {
    localStorage.setItem("todoList", JSON.stringify(newList));
  }


  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
      // 需要调用setState方法来改变数据
    })
  }

  handleBtnClick() {
    if (this.state.inputValue === '') {
      alert('不能为空!')
      return
    }
    var datas = JSON.parse(localStorage.getItem("todoList"));
    console.log(datas);
    datas.push(this.state.inputValue)
    this.setState({
      list: datas,
      // 扩展字符
      inputValue: ''
      // 点击后将输入框置为空
    })
    localStorage.setItem("todoList", JSON.stringify(datas));
    
  }

  handleItemDelete(index) {
    var datas = JSON.parse(localStorage.getItem("todoList"));
    // 深拷贝

    datas.splice(index, 1)
    this.setState({
      list: datas
      // 重新赋值数组
    })
    localStorage.setItem("todoList", JSON.stringify(datas));
  }

  handleItemUpdate(index) {
    let str = prompt("修改标签:")
    if (str === '') {
      alert('输入不能为空!')
    } else if (str === null) {
      return
    } else {
      var datas = JSON.parse(localStorage.getItem("todoList"));
      //console.log(list);
      datas.splice(index, 1, str)
      this.setState({
        list: datas
      })
      localStorage.setItem("todoList", JSON.stringify(datas));
    }


  }
}

export default TodoList;