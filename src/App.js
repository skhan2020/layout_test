import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTask: '',
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  handleTaskOnClick = (event, taskName) => {
    event.preventDefault();
    const selectedTask = this.state.tasks.filter(item => item.name === taskName);
    this.setState({ selectedTask : selectedTask[0] });
  }

  onBackClick = () => {
    const selectedTask = this.state.tasks.map(item => {
      if(item.name === this.state.selectedTask.name && this.state.selectedTask.stage !== 0) {
        item.stage =  item.stage - 1;
      }
    });
    this.setState({task: selectedTask});
  }

  onForwardClick = () => {
    const selectedTask = this.state.tasks.map(item => {
      if(item.name === this.state.selectedTask.name && this.state.selectedTask.stage !== 3) {
        item.stage =  item.stage + 1;
      }
    });
    this.setState({task: selectedTask});
  }


  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }
    return (
      <div className="App">
        <Controls task={this.state.selectedTask}
          onBackClick={this.onBackClick}
          onForwardClick={this.onForwardClick}/>
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          handleTaskOnClick={this.handleTaskOnClick}
        />
      </div>
    );
  }
}

export default App;
