import React from 'react';

import Task from './Task';

const Stage = ({ name, stageId, tasks, handleTaskOnClick }) => {
  return (
    <div
      data-testid={`stage-${stageId}`}
      style={{
        flexGrow: 1,
        margin: '1rem',
        paddingBottom: '1rem',
        background: '#fafafa',
      }}>
      <h2>{name}</h2>
      <div>
        {tasks.map(task => (
          <Task
            key={task.name}
            name={task.name}
            handleTaskOnClick={handleTaskOnClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
