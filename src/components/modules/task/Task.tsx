import React, { FC } from 'react'
import ReactTooltip from 'react-tooltip'
import Container from './Task.styles'
import { ITask } from './ITask'
import TaskHeader from '../../molecules/task-header/TaskHeader'
import TaskForm from '../../molecules/task-form/TaskForm'

const Task: FC<ITask> = () => {
  return (
    <Container>
      <TaskHeader/>
      <TaskForm />
      <ReactTooltip 
        effect="solid" 
        event='mouseover' 
        eventOff='click' 
        globalEventOff='mouseover' 
      />
    </Container>
  )
}

export default Task;
