import React from 'react'
import { ITextField } from './ITextField'
import TextFieldWrapper from './TextField.styles'
import { TiClipboard } from 'react-icons/ti'

const TextField = ({type = 'text', text, setText  }: ITextField) => {

  return (
    <TextFieldWrapper>
        <input type={type} value={text} onChange={(e) => setText(e.target.value)} autoFocus />
        <span className="icon">
            <TiClipboard />
        </span>
    </TextFieldWrapper>
  )
}

export default TextField
