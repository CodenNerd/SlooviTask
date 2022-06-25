import React, { FC } from 'react'
import { FaBell, FaCheck } from 'react-icons/fa'
import { BiPencil } from 'react-icons/bi'
import { ITask } from './ITask'
import Container from  './Task.styles'

const Task: FC<ITask> = ({ id, date, imageUrl, title, handleEdit }: ITask) => {
  return (
    <Container>
      <div className='container'>
        <div className="img-title-container">
          <div className="profile-img-container">
            <img src={imageUrl} alt="Assignee" />
          </div>

          <div className="title">
            <div className="follow-up"> {title} </div>
            <div className="date"> {date} </div>
          </div>
        </div>

        <div className="icons-container">
          <div className="edit-container" onClick={handleEdit}><BiPencil /></div>
          <div className="right">
            <div className="bell-container"><FaBell /></div>
            <div className="check-container"><FaCheck /></div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Task