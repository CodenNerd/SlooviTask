import React, { FC } from 'react'
import DatePicker from '../../atoms/date-picker/DatePicker'
import FieldLayout from '../../atoms/field-layout/FieldLayout'
import ListSelector from '../../atoms/list-selector/ListSelector'
import TextField from '../../atoms/text-field/TextField'
import TimeSelector from '../../atoms/time-selector/TimeSelector'
import TaskFormActions from '../task-form-actions/TaskFormActions'
import { ITaskForm } from './ITaskForm'
import Container from './TaskForm.styles'

const TaskForm: FC<ITaskForm> = ({}) => {
  return (
    <Container>
        <div className="form-inner">
            <form>
                <FieldLayout className="grid-col-2" label='Task Description' >
                    <TextField />
                </FieldLayout>

                <FieldLayout label='Date' >
                    <DatePicker />
                </FieldLayout>

                <FieldLayout label='Time' >
                    <TimeSelector />
                </FieldLayout>

                <FieldLayout className="grid-col-2" label='Assign User' >
                    <ListSelector />
                </FieldLayout>

                <TaskFormActions className="grid-col-2" />

            </form>
        </div>
    </Container>
  )
}

export default TaskForm