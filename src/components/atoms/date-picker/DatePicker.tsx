import React from 'react'
import { FaCalendar, FaCalendarAlt, FaRegCalendarAlt } from 'react-icons/fa'
import { TiCalendar, TiCalendarOutline } from 'react-icons/ti'
import Container from './DatePicker.styles'

const DatePicker = () => {
  return (
    <Container>
        <input type="date" name="" id="" />
        <span className="icon">
            <FaRegCalendarAlt />
        </span>
    </Container>
  )
}

export default DatePicker