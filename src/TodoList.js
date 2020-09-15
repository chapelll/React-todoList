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
      list: ['学英语', '听音乐', '玩游戏']
    }
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

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
      // 需要调用setState方法来改变数据
    })
  }

  handleBtnClick() {
    if (this.state.inputValue === '') {
      alert('请输入内容')
      return
    }

    this.setState({
      list: [...this.state.list, this.state.inputValue],
      // 扩展字符
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    // 深拷贝

    list.splice(index, 1)
    this.setState({
      list: list
      // 重新赋值数组
    })
  }

  handleItemUpdate(index) {
    let str = prompt("修改标签:")
    if (str === '') {
      alert('输入不能为空!')
    } else if (str === null) {
      return
    } else {
      const list = [...this.state.list]
      console.log(list);
      list.splice(index, 1, str)
      this.setState({
        list: list
      })
    }


  }
}

export default TodoList;