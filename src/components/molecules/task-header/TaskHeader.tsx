import React from 'react'
import ReactTooltip from 'react-tooltip';
import { FaPlus } from 'react-icons/fa';
import Container from './TaskHeader.styles';
import { ITaskHeader } from './ITaskHeader';
import { useGlobalFetchData } from '../../../utils/hooks';
import { getTasks } from '../../../redux/actions/actions';

const TaskHeader = ({ newTaskHandler }: ITaskHeader) => {
  const { tasks } = useGlobalFetchData('tasks')
  return (
    <Container>
      <div className="header-inner">
        <div className="title">Tasks <span className="count"> {tasks.length} </span></div>
        <div className="new-task">
          <button
            data-tip="New Task" 
            data-event-off="click" 
            data-event="mouseover" 
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
