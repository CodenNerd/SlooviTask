import React, { useState } from 'react'
import Container from './TaskFormActions.styles'
import { ITaskFormActions } from './ITaskFormActions'
import Button from '../../atoms/button/Button'
import { FaTrashAlt } from 'react-icons/fa'
import { useGlobalFetchData } from '../../../utils/hooks'
import { deleteTask } from '../../../redux/actions/actions'
import ReactTooltip from 'react-tooltip'

const TaskFormActions = ({className, handleCloseTaskForm}: ITaskFormActions) => {
    const [tooltip, showTooltip] = useState(true);
    const { task } = useGlobalFetchData('tasks');

  return (
    <Container className={className}>

        {tooltip && <ReactTooltip effect="solid" />}

        <div className="form-action-inner">

            <div className="left">
                {

                task?.id && <Button 
                                label={<FaTrashAlt />} 
                                className='delete-btn' 
                                onClick={() => deleteTask(task?.id, handleCloseTaskForm)} 
                                theme='neutral-boundriless'
                                dataTip="Delete Task"
                                data-event-off="click"
                                data-event="mouseover"
                                onMouseEnter={() => showTooltip(true)}
                                onMouseLeave={() => {
                                showTooltip(false);
                                }}
                            />
                }                
            </div>


            <div className='right'>
                <Button label='Cancel' onClick={handleCloseTaskForm} theme='neutral-boundriless' />
                <Button type='submit' label='Save' theme='success-solid' />                
            </div>

        </div>
    </Container>
  )
}

export default TaskFormActions