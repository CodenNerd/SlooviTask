import React from 'react'
import ButtonContainer from './Button.styles'
import { IButton } from './IButton'


const Button = ({label, type = 'button', onClick: clickHandler, className, theme }: IButton) => {
  return (
    <ButtonContainer className={`${className} ${theme}`} type={type} onClick={clickHandler}>
        {label}
    </ButtonContainer>
  )
}

export default Button
