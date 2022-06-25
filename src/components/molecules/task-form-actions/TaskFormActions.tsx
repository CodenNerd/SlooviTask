import React from 'react'
import Container from './TaskFormActions.styles'
import { ITaskFormActions } from './ITaskFormActions'
import Button from '../../atoms/button/Button'
import { FaTrashAlt } from 'react-icons/fa'

const TaskFormActions = ({className, handleCloseTaskForm}: ITaskFormActions) => {
  return (
    <Container className={className}>
        <div className="form-action-inner">
            <Button label={<FaTrashAlt />} className='' theme='neutral-boundriless' />
            <div className='buttons'>
                <Button label='Cancel' onClick={handleCloseTaskForm} theme='neutral-boundriless' />
                <Button label='Save' theme='success-solid' />                
            </div>
        </div>
    </Container>
  )
}

export default TaskFormActions