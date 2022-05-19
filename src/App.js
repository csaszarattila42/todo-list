import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.lists.map(list => Object.assign(list, {isShown: false}))
    }
    this.titleClickHandler = this.titleClickHandler.bind(this);
  }

  render() {
    return (
      <div className="App">
        <button type='button'>New List</button>
        <ListContainer lists={this.state.lists} clickHandler={this.titleClickHandler}/>
      </div>
    );
  }
  
  titleClickHandler(listIndex) {
    const modifiedLists = [...this.state.lists];
    modifiedLists[listIndex].isShown = !modifiedLists[listIndex].isShown;
    this.setState({
      lists: modifiedLists
    });
  }
}

class ListContainer extends Component {
  render() {
    const listCompnents =  this.props.lists.map((list, listIndex) => {
      return <TodoList 
                title={list.title}
                listItems={list.listItems}
                isShown={list.isShown}
                clickHandler={() => this.props.clickHandler(listIndex)}
                key={listIndex}
              />
    });
    return (
      <div className='list-container'>
        {listCompnents}
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    let listItemComponents;
    if (this.props.isShown) {
      const sortedListItems = [...this.props.listItems].sort((itemA, itemB) => {
        return itemA.priority === itemB.priority 
          ? itemA.deadLine - itemB.deadLine
          : itemA.priority - itemB.priority 
      });
      listItemComponents = sortedListItems.map((listItem, listItemIndex) => {
        return <ListItem
                name={listItem.name}
                done={listItem.done}
                deadLine={listItem.deadLine}
                key={listItemIndex}
                />
      });
    }
    return (
      <div>
        <h4 onClick={this.props.clickHandler}>{this.props.title}</h4>
        <ul>
          {this.props.isShown ? listItemComponents : null}
        </ul>
      </div>
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <li>
        <label>
          <input type='checkbox' checked={this.props.done} />
          {this.props.name}
        </label>
        {new Intl.DateTimeFormat('hu').format(this.props.deadLine)}
        <button type='button'>Delete</button>
      </li>
    );
  }
}


export default App;
