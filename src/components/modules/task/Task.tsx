import React, { FC, useState } from 'react'
import { FaBell, FaCheck } from 'react-icons/fa'
import { BiPencil } from 'react-icons/bi'
import { ITask } from './ITask'
import Container from  './Task.styles'
import ReactTooltip from 'react-tooltip'

const Task: FC<ITask> = ({ id, date, imageUrl, title, handleEdit }: ITask) => {
    const [tooltip, showTooltip] = useState(true);

  return (
    <Container>
    {tooltip && <ReactTooltip effect="solid" />}

      <div className='container'>
        <div className="img-title-container">
          <div className="profile-img-container">
            <img src={imageUrl || `https://avatars.dicebear.com/api/identicon/custom-seed.svg`} alt="Assignee" />
          </div>

          <div className="title">
            <div className="follow-up"> {title} </div>
            <div className="date"> {date} </div>
          </div>
        </div>

        <div className="icons-container">
          <div 
            className="edit-container" 
            onClick={handleEdit}
            data-tip="Edit Task"
            data-event-off="click"
            data-event="mouseover"
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
            }}
            ><BiPencil /></div>
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