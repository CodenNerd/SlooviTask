import React from 'react'
import { ITextField } from './ITextField'
import TextFieldWrapper from './TextField.styles'
import { TiClipboard } from 'react-icons/ti'

const TextField = ({type = 'text'}: ITextField) => {
  return (
    <TextFieldWrapper>
        <input type={type} />
        <span className="icon">
            <TiClipboard />
        </span>
    </TextFieldWrapper>
  )
}

export default TextField