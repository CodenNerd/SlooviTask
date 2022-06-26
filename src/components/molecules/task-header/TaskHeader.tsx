import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';
import { FaPlus } from 'react-icons/fa';
import Container from './TaskHeader.styles';
import { ITaskHeader } from './ITaskHeader';
import { useGlobalFetchData } from '../../../utils/hooks';

const TaskHeader = ({ newTaskHandler }: ITaskHeader) => {
  const { tasks } = useGlobalFetchData('tasks')
  const [tooltip, showTooltip] = useState(true);

  return (
    <Container>
      <div className="header-inner">
        <div className="title">Tasks <span className="count"> {tasks.length} </span></div>
        <div className="new-task">
      
        {tooltip && <ReactTooltip effect="solid" />}

          <button
            data-tip="New Task"
            data-event-off="click"
            data-event="mouseover"
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
            }}
            onClick={newTaskHandler}
            > 
            <FaPlus fontWeight={1} /> 
          </button>

        </div>
      </div>
    </Container>
  )
}

export default TaskHeader
