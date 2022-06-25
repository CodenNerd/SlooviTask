import React from 'react'
import ButtonContainer from './Button.styles'
import { IButton } from './IButton'


const Button = ({label, type = 'button', onClick: clickHandler, className }: IButton) => {
  return (
    <ButtonContainer className={className} type={type} onClick={clickHandler}>
        {label}
    </ButtonContainer>
  )
}

export default Button