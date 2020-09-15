import React, { Component, Fragment } from 'react';

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
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >提交
                    </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} >{item} <button onClick={this.handleItemDelete.bind(this, index)}>X</button> </li>
            })
          }
        </ul>
      </Fragment>
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
}

export default TodoList;