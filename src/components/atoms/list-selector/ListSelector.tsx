import React from 'react'
import { TiArrowUnsorted } from 'react-icons/ti'
import Container from  './ListSelector.style'

const ListSelector = () => {
  return (
    <Container>
        <input type="text" name="" id="" list='listSelector' />
        <span className="icon">
            <TiArrowUnsorted />
        </span>
        <datalist id="listSelector">
            <option value="AbdulAzeez Atanda">AbdulAzeez Atanda</option>
            <option value="AbdulAzeez Atandas">AbdulAzeez Atandas</option>
        </datalist>
    </Container>
  )
}

export default ListSelector
