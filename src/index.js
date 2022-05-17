import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const LISTS = [
  {
    title: 'Home',
    listItems: [
      {
        name: 'Clean up bottles and cans',
        priority: 1,
        deadLine: null,
        done: false
      },
      {
        name: 'Replace the phone of HELl',
        priority: 0,
        deadLine: new Date('2022-05-19'),
        done: false
      },
    ]
  },
  {
    title: 'Codecool',
    listItems: [
      {
        name: 'Finish pet project',
        priority: 4,
        deadLine: new Date('2022-05-19'),
        done: false
      }
    ]
  }
];


ReactDOM.render(
  <App lists={LISTS}/>,
  document.getElementById('root')
);
