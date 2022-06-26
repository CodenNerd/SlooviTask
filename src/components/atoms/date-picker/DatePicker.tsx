import React, { FC } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Container from './DatePicker.styles'
import { IDatePicker } from './IDatePicker'

const DatePicker: FC<IDatePicker> = ({ date, setDate }) => {

  return (
    <Container>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name="" id="" />
        <span className="icon">
            <FaRegCalendarAlt />
        </span>
    </Container>
  )
}

export default DatePicker