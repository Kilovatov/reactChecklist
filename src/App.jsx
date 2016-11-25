import React, { Component } from 'react';
import './App.css';
import MainView from './MainView'
import EditTaskView from './EditTaskView'

class App extends Component {
  render() {
    return (
      <div className="App">
          { true ? <MainView/> : <EditTaskView/> }
      </div>
    );
  }
}

export default App;
