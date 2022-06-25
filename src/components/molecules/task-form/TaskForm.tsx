import React, { FC, useState } from 'react'
import { getUsers } from '../../../redux/actions/actions'
import { useGlobalFetchData } from '../../../utils/hooks'
import { getDateInYYYY_MM_DD } from '../../../utils/utils'
import DatePicker from '../../atoms/date-picker/DatePicker'
import FieldLayout from '../../atoms/field-layout/FieldLayout'
import ListSelector from '../../atoms/list-selector/ListSelector'
import TextField from '../../atoms/text-field/TextField'
import TimeSelector from '../../atoms/time-selector/TimeSelector'
import TaskFormActions from '../task-form-actions/TaskFormActions'
import { ITaskForm } from './ITaskForm'
import Container from './TaskForm.styles'

const TaskForm: FC<ITaskForm> = ({ handleCloseTaskForm }) => {
    const { users } = useGlobalFetchData('users')
    const { task } = useGlobalFetchData('tasks')

    const [desc, setDesc] = useState( task?.task_msg )
    const [date, setDate] = useState(getDateInYYYY_MM_DD())
    const [time, setTime] = useState('');
    const [selectedUser, setSelectedUser] = useState('')


    return (
    <Container>
        <div className="form-inner">
            <form>
                <FieldLayout className="grid-col-2" label='Task Description' >
                    <TextField 
                        text={desc}
                        setText={setDesc}
                    />
                </FieldLayout>

                <FieldLayout label='Date' >
                    <DatePicker 
                        date={date}
                        setDate={setDate}
                    />
                </FieldLayout>

                <FieldLayout label='Time' >
                    <TimeSelector 
                        time={time}
                        setTime={setTime}
                    />
                </FieldLayout>

                <FieldLayout className="grid-col-2" label='Assign User' >
                    <ListSelector 
                        list={users}
                        selected={selectedUser}
                        setSelected={setSelectedUser}
                     />
                </FieldLayout>

                <TaskFormActions handleCloseTaskForm={handleCloseTaskForm} className="grid-col-2" />

            </form>
        </div>
    </Container>
  )
}

export default TaskForm