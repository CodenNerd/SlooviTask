import React, { ChangeEventHandler, FC } from 'react'
import { timeMap } from '../../../utils/constants';
import { ITimeSelector } from './ITimeSelector'
import Container from './TimeSelector.styles'

const TimeSelector: FC<ITimeSelector> = ({ time, setTime }) => {

    const handleTimeSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTime(e.target.value)
    }

  return (
    <Container>
        <input type="time" value={time} onChange={handleTimeSelect} placeholder='Time' list='timeList' />
        <datalist id="timeList">
            {
                Object.entries(timeMap).map(([key, value]) => (
                    <option key={`time-select-${key}`} value={key}>{value}</option>
                ))
            }
        </datalist>
    </Container>
  )

}

export default TimeSelector