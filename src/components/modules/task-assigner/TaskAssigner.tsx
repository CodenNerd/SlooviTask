import React, { FC, useEffect, useState } from 'react'
import Container from './TaskAssigner.styles'
import { ITaskAssigner } from './ITaskAssigner'
import TaskHeader from '../../molecules/task-header/TaskHeader'
import TaskForm from '../../molecules/task-form/TaskForm'
import Task from '../task/Task'
import { useGlobalFetchData } from '../../../utils/hooks'
import { getTasks, getUsers } from '../../../redux/actions/actions'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { IAction } from '../../../redux/reducers'
import { TASK } from '../../../redux/action-types'

const TaskAssigner: FC<ITaskAssigner> = () => {
  const [showTaskForm, setShowTaskForm ] = useState(false);
  const { tasks, task } = useGlobalFetchData( 'tasks', getTasks)
  const { users } = useGlobalFetchData( 'users', getUsers )
  const dispatch = useDispatch<Dispatch<IAction>>()

  const handleNewTask = () => {
    setShowTaskForm(true)
  }

  const handleEditTask = (task: any) => {
    dispatch({
      type: TASK,
      payload: task
    })
  }

  useEffect(() => {
    if (Object.keys(task)?.length) {
      setShowTaskForm(true)
    } else {
      setShowTaskForm(false)
    }
  }, [task?.id, task])

  const getUserImageUrl = (userId: string) => {
    return users.find((user: any) => user.user_id === userId)?.icon
  }

  return (
    <Container>
      <TaskHeader newTaskHandler={handleNewTask}/>
      {showTaskForm && 
      <TaskForm  handleCloseTaskForm={() => {
        dispatch({ type: TASK, payload: {} })
        setShowTaskForm(false)
        }} 
      />
      }

      {
        !showTaskForm && tasks.map((task: any) => (
          <Task 
            key={task.id}
            date={task.task_date} 
            id={task.id} 
            imageUrl={getUserImageUrl(task.assigned_user)}
            handleEdit={() => handleEditTask(task)}
            title={task.task_msg}
          />
        ))
      }
    </Container>
  )
}

export default TaskAssigner;
