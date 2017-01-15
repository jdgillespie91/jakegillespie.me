import React, {Component} from 'react';
import {Label} from 'react-bootstrap';
import './App.css';

const statusMap = {
  1: {
    style: 'warning',
    text: 'In development',
  },
  2: {
    style: 'danger',
    text: 'Deprecated',
  },
  3: {
    style: 'success',
    text: 'Stable',
  },
};

const Table = ({list}) =>
  <div className="table">
    {list.map((item) =>
      <div key={item.objectId} className="table-row">
        <span style={{width: '40%'}}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{width: '60%'}}>
          <Label bsStyle={statusMap[item.status].style}>{statusMap[item.status].text}</Label>
        </span>
      </div>
    )}
  </div>;

const Header =
  <div className="header">
    <div className="header-row">
      <span>jakegillespie.me</span>
      <span>contact me?</span>
    </div>
  </div>;

function fetchProjects() {
  const result = fetch('http://172.17.0.2:8000/projects').then(response => response.json())
  console.log(result)
  return result
}

class App extends Component {
  render() {
    const list = fetchProjects()

    return (
      <div className="App">
        {Header}
        <Table list={list}/>
      </div>
    );
  }
}

export default App;
