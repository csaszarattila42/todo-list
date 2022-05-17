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

export default App;
