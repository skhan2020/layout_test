import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: '',
      backDisabled: true,
      forwardDisabled: true,
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.task.name !== state.formInput ||
      props.task.stage !== state.stage) {
      return {
        formInput: props.task.name,
        backDisabled: props.task.stage === 0,
        forwardDisabled: props.task.stage === 3,
      };
    }
    return null;
  }
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
            value={this.state.formInput}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.state.formInput || this.state.backDisabled}
            data-testid="move-back-btn"
            onClick={onBackClick}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!this.state.formInput || this.state.forwardDisabled}
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
