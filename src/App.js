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

export default App;
