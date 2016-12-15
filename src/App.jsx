import React, { Component } from 'react';
import './App.css';
import MainView from './pages/MainView'
import EditTaskView from './pages/EditTaskView'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'main',
      data: [
        {
          name: 'category1',
          tasks: [{
            title: 'some task: do1',
            description: 'do one thing'
          },
            {
            title: 'some task: do2',
            description: 'do another thing'
          }],
          categories: [
            {
              name: 'sub1',
              tasks: [],
              categories: [
                {
                  name: 'subsub1',
                  categories: []
                }
              ]
            }
          ]
        },
        {
          name: 'category2',
          tasks: [],
          categories: []
        },
        {
          name: 'category3',
          tasks: [],
          categories: []
        }
      ]
    }
}

  render() {
    return (
      <div className="App">
          { this.state.view === 'main' ? <MainView categories={this.state.data}/> : <EditTaskView categories={this.state.data}/> }
      </div>
    );
  }
}

export default App;
