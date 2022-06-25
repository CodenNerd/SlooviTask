import React, { ChangeEventHandler, FC, useState } from 'react'
import { ITimeSelector } from './ITimeSelector'
import Container from './TimeSelector.styles'

const TimeSelector: FC<ITimeSelector> = () => {
    const [time, setTime] = useState('');

    const handleTimeSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
        setTime(e.target.value)
    }
  return (
    <Container>
        <input type="time" value={time} onChange={handleTimeSelect} placeholder='Time' list='timeList' />
        <datalist id="timeList">
            <option value=""></option>
            <option value="12:00"></option>
            <option value="12:30"></option>
            <option value="13:00"></option>
            <option value="13:30"></option>
            <option value="14:00"></option>
            <option value="14:30"></option>
            <option value="15:00"></option>
            <option value="15:30"></option>
        </datalist>
    </Container>
  )
}

export default TimeSelector