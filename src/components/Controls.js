import React, { Component } from 'react';

class Controls extends Component {
  render() {
    const { onBackClick, onForwardClick } = this.props;
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={this.props.task.name}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.props.task.name || this.props.task.stage === 0}
            data-testid="move-back-btn"
            onClick={onBackClick}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.props.task.name || this.props.task.stage === 3}
            data-testid="move-forward-btn"
            onClick={onForwardClick}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
