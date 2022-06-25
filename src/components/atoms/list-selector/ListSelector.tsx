import React, { useState } from 'react'
import { TiArrowUnsorted } from 'react-icons/ti'
import { IListSelector } from './IListSelector'
import Container from  './ListSelector.style'

const ListSelector = ({ list, selected, setSelected }: IListSelector) => {

    return (
    <Container>
        <input type="text" name="" value={''} onChange={(e: any) => setSelected(e.target.value)} id="" list='listSelector'/>
        <input className='proxy-input' type="text" value={list.find(l=> l.id === selected)?.name} />

        <span className="icon">
            <TiArrowUnsorted />
        </span>

        <datalist id="listSelector" >
            {
                list.map((l: any, i: number) => (
                    <option key={"datalist-" + i} value={l.id}> {l.name}  </option>
                ))
            }
        </datalist>
    </Container>
  )
}

export default ListSelector
