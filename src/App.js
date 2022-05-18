import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewListButton />
        <ListContainer lists={this.props.lists} />
      </div>
    );
  }
}

class ListContainer extends Component {
  render() {
    const listCompnents =  this.props.lists.map((list, listItemIndex) => {
      return <TodoList 
                title={list.title}
                listItems={list.listItems}
                key={listItemIndex}
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
    const sortedListItems = [...this.props.listItems].sort((itemA, itemB) => {
      return itemA.priority === itemB.priority 
        ? itemA.deadLine - itemB.deadLine
        : itemA.priority - itemB.priority 
    });
    const listItemComponents = sortedListItems.map(listItem => {
      return <ListItem
               name={listItem.name}
               done={listItem.done}
               deadLine={listItem.deadLine}
              />
    });
    return (
      <>
        <h4>{this.props.title}</h4>
        <ul>
          {listItemComponents}
        </ul>
      </>
    );
  }
}

export default App;
