import React, { Component, Fragment } from 'react';
import './TodoList.css';
import { Button } from 'antd';
import { Input } from 'antd';

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
  componentDidMount() {
    // 取出
    let datas = this.get()
    if (!datas) {
      // 设置一些默认值
      datas = ['学英语', '听音乐', '玩游戏']
    }
    if (datas) {
      this.setState({
        list: datas
      })
    }
    // 存储
    this.set(datas)
  }

  render() {
    return (
      <Fragment>
        <header>

        
          <Input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            placeholder="提交新的待办事项"
          />
          <Button type="primary"
            onClick={this.handleBtnClick.bind(this)}
          >提交
          </Button>
        </header>
        <div className="content">
          <ul>
            {
              this.state.list.map((item, index) => {
                return <li
                  key={index} >{item}
                  <div>
                    <Button type="primary" onClick={this.handleItemUpdate.bind(this, index)}>修改</Button>
                    <Button type="primary" danger onClick={this.handleItemDelete.bind(this, index)}>删除</Button>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }


  // 定义取出数据函数，每次执行操作前进行提取
  get() {
    return JSON.parse(localStorage.getItem("todoList"));
  }

  // 定义储存数据函数，每次执行操作后进行存储
  set(datas) {
    localStorage.setItem("todoList", JSON.stringify(datas));
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
    var datas = this.get()
    datas.push(this.state.inputValue)
    this.setState({
      list: datas,
      inputValue: ''
      // 点击后将输入框置为空
    })

    this.set(datas)

  }

  handleItemDelete(index) {
    var datas = this.get()

    datas.splice(index, 1)
    this.setState({
      list: datas
      // 重新赋值数组
    })

    this.set(datas)
  }

  handleItemUpdate(index) {
    let str = prompt("修改标签:")
    if (str === '') {
      alert('输入不能为空!')
    } else if (str === null) {
      return
    } else {
      var datas = this.get()
      datas.splice(index, 1, str)
      this.setState({
        list: datas
      })
      this.set(datas)
    }
  }
}

export default TodoList;