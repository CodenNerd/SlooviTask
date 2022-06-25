import React, { FC, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import Container from './TaskAssigner.styles'
import { ITaskAssigner } from './ITaskAssigner'
import TaskHeader from '../../molecules/task-header/TaskHeader'
import TaskForm from '../../molecules/task-form/TaskForm'

const TaskAssigner: FC<ITaskAssigner> = () => {
  const [showTaskForm, setShowTaskForm ] = useState(false);
  const handleNewTask = () => {
    setShowTaskForm(true)
  }
  return (
    <Container>
      <TaskHeader newTaskHandler={handleNewTask}/>
      {showTaskForm && <TaskForm />}
      <ReactTooltip 
        effect="solid" 
        event='mouseover' 
        eventOff='click' 
        globalEventOff='mouseover' 
      />
    </Container>
  )
}

export default TaskAssigner;