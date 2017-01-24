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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };

    this.setProjects = this.setProjects.bind(this);
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  setProjects(projects) {
    this.setState({projects});
  }

  fetchProjects() {
    const iterator = fetch('https://projects.jakegillespie.me/projects');
    iterator.then(response => response.json()).then(data => this.setProjects(data));
  }

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    const {projects} = this.state;

    return (
      <div className="App">
        {Header}
        <Table list={projects}/>
      </div>
    );
  }
}

export default App;
